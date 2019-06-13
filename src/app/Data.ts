export class Class{
    id_class:Number;
    class_name:String;
}
export class day{
    id_day:Number;
    day_name:String;
}
export class timetable{
    id_class:Number;
    id_day:Number;
    day_name:String;
    content:String;
}

export const URl_API="http://localhost/siteTimetable";
