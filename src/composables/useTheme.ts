import { useToggle, useDark } from '@vueuse/core'
import {watch} from "vue"
import {ElMessage} from "element-plus"

export const useTheme = () => {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  watch(isDark, (newValue) => {
    let str = '您已切换到浅色模式'
    if (newValue) {
      str = '您已切换到深色模式'
    }
    ElMessage.success(str);
  })

  return {isDark, toggleDark}
}
