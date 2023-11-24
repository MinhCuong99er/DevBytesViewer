import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FormTemplate1 from "../compoment/FormTemplate1";
import FormTemplate2 from "../compoment/FormTemplate2";
import FormTemplate3 from "../compoment/FormTemplate3";
import dataService from "../network/service";
import { useHistory } from "react-router";
import _ from "lodash";
import TemplateSelect from "../compoment/TemplateSelect";
import FormAdapter from "../compoment/FormAdapter";
import { addEvent } from "../pubsub";
const queryString = require('query-string');


function flat(array) {
  var result = [];
  array.forEach(function (a) {
    result.push(a);
    if (Array.isArray(a.children)) {
      result = result.concat(flat(a.children));
    }
  });
  return result;
}

function Form(props) {
  const [index, setIndex] = useState(0)
  const [planInfo, setPlain] = useState({})
  const [planDetails, setPlainDetails] = useState([])
  const [subPlain, setSubPlain] = useState()
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)


  let [tmpPlain, setTmpPlain] = useState([])

  let [activePlain, setActivePlain] = useState({})
  const history = useHistory()
  useEffect(() => {

    AOS.init();
    getInfo()
  }, []);

  const getInfo = async () => {
    let rs = await dataService.getInfo({
      surveyKey: localStorage.getItem('KEY_VERIFY')
    })
    if (!rs || rs.code) return
    if (rs.isDone) {
      return history.push('/completed')
    }
    setPlain(rs.data.planInfo)
    setPlainDetails(rs.data.planDetails)
    setActivePlain(rs.data.planDetails[0])

  }

  const onPreIndex = async () => {

    if (!tmpPlain?.length) return

    setActivePlain(tmpPlain[tmpPlain.length - 1])
    setPage((val) => tmpPlain[tmpPlain.length - 1]?.index || 1)
    tmpPlain.pop()
  }

  const submitAnswer = async (plain, value) => {
    let tmpValue = value + ''
    if (!tmpValue && plain.answerRequiredYn) return alert('Yêu cầu nhập thông tin')
    tmpValue = tmpValue.split(',')
    tmpValue = _.without(tmpValue, undefined, null, "", "crap")
    tmpValue = tmpValue.toString()
    let rs = await dataService.putAnswer({
      "surveyKey": localStorage.getItem('KEY_VERIFY'),
      "questionId": plain?.id,
      "inputType": plain.inputType,
      value: tmpValue,
      index: plain.index
    })
    if (!rs || rs.code) return alert(rs?.message)
    return rs
  }

  const onNextIndex = async (value) => {
    if (activePlain?.answerRequiredYn && !value) return alert('Câu trả lời là bắt buộc')
    let rs = await submitAnswer(activePlain, value)
    let tmp = [...tmpPlain]
    tmp.push(activePlain)
    tmp = _.uniqBy(tmp, function (e) {
      return e.id;
    });
    setTmpPlain(tmp)

    if (rs.nextQuestion) {
      if (!activePlain?.children?.length) {
        setPage(page + 1)

      }
      return setActivePlain(rs.nextQuestion)
    }
    return history.push('/completed')
  }

  useEffect(() => {
    if (planDetails.length) {
      setActivePlain(planDetails[index])
    }
  }, [index])

  return (
    <>
      <FormAdapter onPreIndex={onPreIndex}
        activePlain={activePlain}
        onNextIndex={onNextIndex}
        planInfo={planInfo}
        planDetails={planDetails}
        index={index}
        setActivePlain={setActivePlain}
        subPlain={subPlain}
        setSubPlain={setSubPlain}
        page={page}
        total={total}
      />
    </>
  );
}
export default Form;
