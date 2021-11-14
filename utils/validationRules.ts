export const required = () => ({
    name: 'required',
    test: (value: string) => Boolean(value.trim()),
    message: 'Заполните это поле',
})

export const pattern = (regexp: RegExp) => ({
    name: 'regexp',
    test: (value: string) => regexp.test(value),
    message: 'Некорректный ввод',
})
