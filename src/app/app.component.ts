import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	myArr =['Hộp Thư: [DLU]','Trang nội bộ','Sáng tạo phần mềm','Nhập điểm Online'];
	myArrMenu =['E-Learning','Trung tâm IT','Tài nguyên','Phản hồi','Liên hệ'];
	
	myObject={
		a:'Giới thiệu',
		b:'Chương Trình Giáo dục',
		c:'Đào tạo',
		d:'Hệ VL-VH',
		e:'NCKH-Hợp tác',
		f:'Công tác Sinh Viên',
		g:'Đoàn-Thanh niên',
		m:'Cựu SV',
		n:'Hình ảnh-video',

	}
	con=['Giới thiệu chung','Cơ sở vật chất','Cơ cấu tổ chức'];
	con1=['Hệ thống tín chỉ','Hệ thống đơn vị học trình','Danh mục môn học quy đổi'];
}
