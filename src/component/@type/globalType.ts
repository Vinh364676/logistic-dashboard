export type GlobalState = {
    globalList: Array<Global>;
    globalDetail:Global
};


export type Global = {
    _id: string;
    tag:string;
    title:string;
    desc:string;
    image:string;
    type:number;
   
};

