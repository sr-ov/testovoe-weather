import { UnwrapRef } from '@nuxtjs/composition-api'
import useValidate from 'vue-tiny-validate'
import type { Rules, Data } from 'vue-tiny-validate'

export const useValidationResult = (
    data: UnwrapRef<Data>,
    rules: UnwrapRef<Rules>
) => {
    const { result } = useValidate(data, rules)

    function hasError() {
        return result.value.$errors.length
    }
    function getErrorMsg() {
        return result.value.$messages[0]
    }
    function getHandlers() {
        return {
            input: result.value.$test,
            blur: result.value.$test,
        }
    }

    return {
        getHandlers,
        getErrorMsg,
        hasError,
        checkResult: () => {
            result.value.$test()
            return !result.value.$invalid
        },
    }
}
