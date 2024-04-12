import { random, sampleSize } from 'lodash'
import { useEffect, useState } from 'react'
import { toastUtil } from './Toast'

const helper = {
  testClipboard: (key) => {
    navigator.clipboard.writeText(key).then(
      (v) => console.log('Success' + v),
      (e) => console.log('Fail\n' + e)
    )
    const input = document.body.appendChild(document.createElement('input'))
    input.value = key
    input.focus()
    input.select()
    document.execCommand('copy')
    input.parentNode.removeChild(input)
    // window?.['android']?.NativeAndroid?.copyToClipboard(key)
  },
  sliceString: (_string: string, _indexSlice: number) => {
    const arrSplit = _string?.split('\n')
    if (arrSplit?.length <= _indexSlice || !_string) {
      return _string
    } else {
      let count = 0
      for (let i = 0; i < _indexSlice; i++) {
        count += arrSplit?.[i]?.length
      }
      return _string.slice(0, count + _indexSlice)
    }
  },
  useContainerDimensions: (myRef) => {
    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight,
    })
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    useEffect(() => {
      const handleResize = () => {
        setDimensions(getDimensions())
      }
      if (myRef.current) {
        setDimensions(getDimensions())
      }
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [myRef])
    return dimensions
  },
  generateRandomNumber: (_length: number) => {
    const randomLength = random(0, _length)
    return randomLength
  },
  generateRandomString: () => {
    // Số ký tự ngẫu nhiên
    const randomLength = random(8, 10)
    // Tập hợp các ký tự có thể được chọn
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    // Tạo chuỗi ngẫu nhiên
    const randomString = sampleSize(characters, randomLength).join('')
    return randomString
  },
  poopityScoop: () => {
    window.ononline = () => {
      toastUtil.success('Đã kết nối mạng thành công')
    }
    window.onoffline = () => {
      toastUtil.error('Không có kết nối mạng. Kiểm tra lại két nối !')
    }
  },
}
export default helper
