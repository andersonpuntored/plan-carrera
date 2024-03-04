import EmploymentUserModel from '~/api/models/EmploymentUserModel'
import AddressUserModel from '~/api/models/AddressUserModel'
import CreditCardUserModel from '~/api/models/CreditCardUserModel'
import SubscriptionUserModel from '~/api/models/SubscriptionUserModel'
export default class GeneralUserModel {
    id: number
    uid: string
    first_name: string
    last_name: string
    username: string
    email: string
    avatar: string
    gender: string
    phone_number: string
    social_insurance_number: string
    date_of_birth: string
    employment: EmploymentUserModel
    address: AddressUserModel
    credit_card: CreditCardUserModel
    subscription: SubscriptionUserModel
    constructor(
        id: number = 0,
        uid: string = '',
        first_name: string = '',
        last_name: string = '',
        username: string = '',
        email: string = '',
        avatar: string = '',
        gender: string = '',
        phone_number: string = '',
        social_insurance_number: string = '',
        date_of_birth: string = '',
        employment: EmploymentUserModel,
        address: AddressUserModel,
        credit_card: CreditCardUserModel,
        subscription: SubscriptionUserModel,
    )
    {
        this.id = id
        this.uid = uid
        this.first_name = first_name
        this.last_name = last_name
        this.username = username
        this.email = email
        this.avatar = avatar
        this.gender = gender
        this.phone_number = phone_number
        this.social_insurance_number = social_insurance_number
        this.date_of_birth = date_of_birth
        this.employment = employment
        this.address = address
        this.credit_card = credit_card
        this.subscription = subscription
    }
}