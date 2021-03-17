import { ElMessage } from 'element-plus'

const clipboard = new ClipboardJS('.copy')
clipboard.on('success', (e) => {
  ElMessage.success('复制成功')
})
clipboard.on('error', (e) => {
  ElMessage.error('复制失败')
})

export default clipboard
