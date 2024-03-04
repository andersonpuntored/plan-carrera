export default class EmploymentUserModel {
    title: string
    key_skill: string

    constructor(title: string = '', key_skill: string = '') {
        this.title = title
        this.key_skill = key_skill
    }
}