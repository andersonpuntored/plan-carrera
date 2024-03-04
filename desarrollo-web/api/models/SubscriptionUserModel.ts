export default class SubscriptionUserModel {
    plan: string
    status: string
    payment_method:string
    term:string
    constructor(plan: string = '', status: string = '', payment_method: string = '', term: string = '') {
        this.plan = plan
        this.status = status
        this.payment_method = payment_method
        this.term = term
    }
}