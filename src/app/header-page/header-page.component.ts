import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ConnectAPIService} from '../connect-api.service';
import { Class,URl_API,timetable, day} from '../Data';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {
  Class:Class[]=[];
  timetable:timetable[]=[];

  class_name:String="";
  day:day[]=[];

  thu="Chọn thứ";
  content_timeTable:timetable;
  show(){
    this._connectAPI.getAllClass().subscribe((d:Class[])=>{
      this.Class=d;
    });
    this._connectAPI.getAllDay().subscribe((d:day[])=>{
      this.day=d;
    });
    this.content_timeTable=new timetable();
  }
  constructor(
    private _modalService:NgbModal,
    private _connectAPI:ConnectAPIService
  ) { }

  ngOnInit() {
    this.show();
  }
  btn_details(id_class){
    this._connectAPI.gettkb_class(id_class).subscribe((d:timetable[])=>{
      this.timetable=d;
    })
    this.content_timeTable.id_class=Number(id_class);
  }
  open(content){
   this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
this._connectAPI.gettkb_class(1).subscribe((d:timetable)=>{
  console.log(d)
});  

}
  btn_open_save(){
    this._connectAPI.insertClass_class_name(this.class_name).subscribe(d=>{
      console.log(d)
    })
    this._modalService.dismissAll();
    this.show();
  }


  open_add(content_add){

    this._modalService.open(content_add, {ariaLabelledBy: 'modal-basic-title'});
  
  
  }
  btn_open_add(){
    if(this.thu=="Thứ"||this.thu=="Chọn thứ"){
      alert("Vui lòng chọn thứ !")
    }else if(this.content_timeTable.content.length==0){
      alert("Vui lòng nhập môn !");
    }
    else{
      let arr = this.thu.split(".");
      this.content_timeTable.id_day= Number(arr[0]);
     this._connectAPI.check_day_in_tkb(this.content_timeTable.id_class,this.content_timeTable.id_day).subscribe((d:timetable[])=>{
      if(d.length==0){
        this._connectAPI.insert_tkb(this.content_timeTable).subscribe(d=>{
          console.log(d)
        })
        alert("Tạo thành công !");
        console.log(this.content_timeTable)
        this.content_timeTable.content="";
        this.thu="Thứ"
        this._modalService.dismissAll();
        this.btn_details(this.content_timeTable.id_class);
       }else{
        alert("Thứ "+this.content_timeTable.id_day +" đã tồn tại !");
       }    
     })
    }
  }

  open_edit(content_edit,id_day,content_timeTable){
    this._modalService.open(content_edit, {ariaLabelledBy: 'modal-basic-title'});
    //gán cho đối tượng item 1 giá trị xác định mặc định khi không click
    this.content_timeTable.id_day=id_day;
    this.content_timeTable.content=content_timeTable;
    
  }
  btn_open_edit(){
    console.log(this.content_timeTable)
    this._connectAPI.update_tkb(this.content_timeTable).subscribe(d=>{
      console.log(d)
      this.content_timeTable.content="";
      
    })
    this._modalService.dismissAll();
    console.log(this.content_timeTable)
    this.btn_details(this.content_timeTable.id_class);
  }
  delete_id_class=null;
  delete_id_day=null;
  open_delete(content_delete,id_class,id_day){
    this._modalService.open(content_delete, {ariaLabelledBy: 'modal-basic-title'});
    this.delete_id_class=id_class;
    this.delete_id_day=id_day;
  }
  btn_open_delete(){
    this._connectAPI.delete_tkb(this.delete_id_class,this.delete_id_day).subscribe(d=>{
      console.log(d);
      alert("Xóa thành công !");
    })
    this._modalService.dismissAll();
    this.btn_details(this.content_timeTable.id_class);
    
  }
}
