export type ContactState = {
    contactList: Array<Contact>;
};

export type Contact = {
    _id: string;
    name:string;
    email:string;
    phone:string;
    city:string;
    desc:number;
};

