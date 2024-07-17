<?php

namespace App\Http\Controllers\Web\NhaTruong;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Kid, Classes, Parents,GradeModel,History,SchoolYearModel, Grade};
use App\Http\Requests\Kid\{KidRequest, EditKidRequest};
use DB;
use Arr;
use Carbon\Carbon;

class KidController extends Controller
{
    public function index(Request $request)
    {
        
        if($request->all() != null && $request['page'] == null){
            foreach($request->all() as $key => $value){
                if($key == 'kid_status'){
                    $data['kids'] = Kid::where("$key","$value")->orderBy('id', 'desc')->paginate(10);
                }
                elseif($key == 'kid_name'){
                    $data['kids'] = Kid::where("$key",'LIKE',"%$value%")->orderBy('id', 'desc')->paginate(10);
                }
                elseif($key == 'gender'){
                    $data['kids'] = Kid::where("$key","$value")->orderBy('id', 'desc')->paginate(10);
                }
        
            }
        }else{
            $data['kids'] = Kid::orderBy('id', 'desc')->paginate(10);
        }
        
        return view('staff.nha-truong.quan-ly-hoc-sinh.index', $data);
    }
    public function create()
    {
        $data['classes'] = Classes::all();
        return view('staff.nha-truong.quan-ly-hoc-sinh.add', $data);
    }
    public function search(Request $request)
    {
        if ($request->ajax()) {
            $output = '';
            $query = $request->get('query');
            if ($query != '') {
                $data = Parents::where("phone", 'LIKE', "$query")->first();
            } else {
                $data = Parents::all();
            }
            $total_row = $data->count();
            if ($total_row > 0) {

                $output .= '
            <input value=' . $data->id . ' name="parent_id" type="text" class="form-control m-input" style="display:none">
            <div class="form-group m-form__group">
                <label>Ảnh đại diện phụ huynh</label>
                <img src="' . asset('/upload/avatar/' . "$data->parent_avatar") . '" id="avatar" width="300px">
            </div>
            <div class="form-group m-form__group">
                <label>Họ tên phụ huynh</label>
                <input value=' . $data->parent_name . ' name="parent_name" type="text" class="form-control m-input" readonly>
            </div>
            <div class="form-group m-form__group">
                <label>Số điện thoại</label>
                <input value=' . $data->phone . ' name="phone" type="text" class="form-control m-input" placeholder="Nhập số điện thoại" readonly>
            </div>
            <div class="form-group m-form__group">
                <label>Email</label>
                <input value=' . $data->email . ' name="email" type="text" class="form-control m-input" placeholder="Nhập email" readonly>
            </div>
            <div class="form-group m-form__group">
                <label>Trạng thái</label>
                <select name="parent_status" id="cars" class="form-control" disabled>
                    <option @if (' . $data->parent_status . ' == 0) selected @endif value="0">Khóa</option>
                    <option @if (' . $data->parent_status . ' == 1) selected @endif value="1">Hoạt Động</option>
                </select>
            </div>
        ';
            } else {
                $output = '
       <tr>
        <td align="center" colspan="5">No Data Found</td>
       </tr>
       ';
            }
            $data = array(
                'table_data'  => $output,
                'total_data'  => $total_row
            );

            echo json_encode($data);
        }
    }

    public function store(KidRequest $request)
    {


        if ($request->has('check')) {
            $kid = new Kid();

            $kid->parent_id = $request->parent_id;
            $kid->kid_name = $request->kid_name;
            $kid->nickname = $request->nickname;
            $kid->gender = $request->gender;
            $kid->date_of_birth = $request->date_of_birth;
            $kid->address = $request->address;
            $kid->admission_date = $request->admission_date;
            $kid->class_id = $request->class_id;
            $grade_id = Classes::where('id', $request->class_id)->first()->grade_id;
            $kid->grade_id = $grade_id;
            $kid->kid_status = '1';
            $kid->description = $request->description;
            if ($request->hasFile('kid_avatar')) {
                $avatar = $request->file('kid_avatar');
                $getAvatar = time() . '_' . $avatar->getClientOriginalName();
                $destinationPath = public_path('upload/avatar');
                $avatar->move($destinationPath, $getAvatar);
                $kid->kid_avatar = $getAvatar;
            } else {
                $kid->kid_avatar = '';
            }
            $kid->save();
        } else {
            $parent = new Parents();
            $parent->parent_name = $request->parent_name;
            $parent->phone = $request->phone;
            $parent->email = $request->email;
            $parent->password = bcrypt('123456');
            $parent->parent_status = '1';
            // $parent->parent_avatar=$request->file('parent_avatar');
            if ($request->hasFile('parent_avatar')) {
                $avatar = $request->file('parent_avatar');
                $getAvatar = time() . '_' . $avatar->getClientOriginalName();
                $destinationPath = public_path('upload/avatar');
                $avatar->move($destinationPath, $getAvatar);
                $parent->parent_avatar = $getAvatar;
            } else {
                $parent->parent_avatar = '';
            }

            $parent->save();

            $kid = new Kid();
            $kid->parent_id = $parent->id;
            $kid->kid_name = $request->kid_name;
            $kid->nickname = $request->nickname;
            $kid->gender = $request->gender;
            $kid->date_of_birth = $request->date_of_birth;
            $kid->address = $request->address;
            $kid->admission_date = $request->admission_date;
            $kid->class_id = $request->class_id;
            $grade_id = Classes::where('id', $request->class_id)->first()->grade_id;
            $kid->grade_id = $grade_id;
            
            $kid->kid_status = '1';
            $kid->description = $request->description;
            $avatar = $request->file('kid_avatar');
            $getAvatar = time() . '_' . $avatar->getClientOriginalName();
            $destinationPath = public_path('upload/avatar');
            $avatar->move($destinationPath, $getAvatar);
            $kid->kid_avatar = $getAvatar;
            $kid->save();
        }

            $history = new History();
            $history->kid_id = $kid->id;
            $history->class_id = $kid->class_id;
            $history->date = date("Y-m-d");
            $history->status = '1';
           
            $history->save();

        request()->flashOnly('check');
        request()->flashOnly('search');
        request()->flashOnly('kid_name');
        request()->flashOnly('nickname');
        request()->flashOnly('gender');
        request()->flashOnly('date_of_birth');
        request()->flashOnly('address');
        request()->flashOnly('admission_date');
        request()->flashOnly('class_id');
        request()->flashOnly('kid_status');
        request()->flashOnly('description');
        request()->flashOnly('parent_name');
        request()->flashOnly('phone');
        request()->flashOnly('email');
        request()->flashOnly('status');

        session()->flash('message','Thêm mới học sinh thành công!');
              return redirect()->back();
    }
    public function edit($id)
    {
        $data['kid'] = Kid::find($id);
        $data['classes'] = Classes::all();
        return view('staff.nha-truong.quan-ly-hoc-sinh.edit', $data);
    }
    
    public function update(EditKidRequest $request, $id)
    {
        $kid = Kid::find($id);
        $data = Arr::except(request()->all(), ["_token ,'_method'"]);
        $data = Arr::except($request->all(), ['_token']);
        if ($request->hasFile('kid_avatar')) {
            $avatar = $request->file('kid_avatar');
            $getAvatar = time() . '_' . $avatar->getClientOriginalName();
            $destinationPath = public_path('upload/avatar');
            $avatar->move($destinationPath, $getAvatar);
            $data['kid_avatar']  = $getAvatar;
        } else {
            $data['kid_avatar'] = $kid->kid_avatar;
        }
        $kid->update($data);
        session()->flash('message','Cập nhật thông tin trẻ thành công!');
        return redirect()->back();
    }
    public function change()
    {
        $data['classes'] = Classes::where('status', '1')->get();
        return view('staff.nha-truong.quan-ly-hoc-sinh.change', $data);
    }
    public function save(Request $request)
    {
        if($request->old_class_id == ""){
            session()->flash('error','Chưa chọn lớp cũ!');
            return redirect()->back();
        }
        if($request->class_id == ""){
            session()->flash('error','Chưa chọn lớp mới!');
            return redirect()->back();
        }
        if($request->old_class_id = $request->class_id){
            session()->flash('error','Lớp mới và lớp cũ trùng nhau!');
            return redirect()->back();
        }
        if ($request->has('check')) {
            foreach ($_POST['check'] as $id) {
                $kid = Kid::find($id);
                $data = Arr::except(request()->all(), ["_token ,'_method'"]);
                $kid->update($data);
            }
            foreach ($_POST['check'] as $id) {
                $history = new History();
                $history->class_id = $request->class_id;
                $history->kid_id = $id;
                $history->date = date("Y-m-d");
                $history->status = '2';
                $history->save();
            }
            session()->flash('message','Chuyển lớp thành công!');
            return redirect()->back();
        }
        else{
            session()->flash('error','Không có học sinh để chuyển!');
            return redirect()->back();
        
        }
        
    }

    public function change_list(Request $request)
    {
        if ($request->ajax()) {
            $output = '';
            $query = $request->get('query');
            
            if ($query != '') {
                $data = DB::table('kids')
                        ->where("class_id", 'LIKE', $query)->get();
            }   
            $total_row = $data->count();
            if ($total_row > 0) {
                foreach($data as $row)
                {
                $output .= '
                
                                        <tr>
                                            <th rowspan="1" colspan="1"><input type="checkbox" class="checkitem" name="check[]" value="'.$row->id.'" ></th>  
                                            <th rowspan="1" colspan="1">'.$row->kid_name.'</th>
                                            <th rowspan="1" colspan="1">'.$row->gender.'</th>
                                            <th rowspan="1" colspan="1">'.$row->date_of_birth.'</th>
                                        </tr>
                                   
            
        ';
            }
        } else {
                $output = '
                <tr>
                    <th colspan="4" class="text-center"><label class="col-lg-10 text-danger">Không có học sinh nào trong lớp này!</label> </th>
                </tr>
                
       ';
            }
            $data = array(
                'table_data'  => $output,
                'total_data'  => $total_row
            );

            echo json_encode($data);
        }
        
    }
   
    public function change_class($id)
    {
        $data['kid'] = Kid::find($id);
        $data['class'] = Classes::find($data['kid']->class_id);
        $grade_id = $data['class']->grade_id;
        
        $data['classes'] = DB::table('classes')
                            ->where('grade_id','=',$grade_id)
                            ->where('id','!=', $data['kid']->class_id)
                            ->where('status','=', '1')
                            ->get();
        // dd($data['classes']);
        
        return view('staff.nha-truong.quan-ly-hoc-sinh.change_class', $data);
    }
    public function save_change(Request $request, $id)
    {
        $kid = Kid::find($id);
        $data = Arr::except(request()->all(), ["_token ,'_method'"]);
        $kid->update($data);
        
        $history = new History();
                $history->class_id = $request->class_id;
                $history->kid_id = $id;
                $history->date = date("Y-m-d");
                $history->status = '2';
                $history->save();
        session()->flash('message','Chuyển lớp thành công!');
        return redirect()->back();
    }
    public function stop($id)
    {
        $data['kid'] = Kid::find($id);
        return view('staff.nha-truong.quan-ly-hoc-sinh.stop', $data);
    }
    public function save_stop(Request $request, $id)
    {
        $kid = Kid::find($id);
        $data['kid_status'] = '2';
        $kid->update($data);

        $history = new History();
        $history->class_id = $kid->class_id;
        $history->kid_id = $id;
        $history->date = $request->date;
        $history->status = '4';
        $history->save();
        return redirect()->route('nha-truong.tre.index');
    }
    

    public function history($id)
    {
        $data['histories'] = History::where('kid_id',$id)->orderBy('id','desc')->paginate(10);
        return view('staff.nha-truong.quan-ly-hoc-sinh.history', $data);
    }
    public function arrange(){
        $data['grades'] = GradeModel::all();
        return view('staff.nha-truong.quan-ly-hoc-sinh.arrange',$data);
    }
    public function save_arrange(Request $request)
    {
        if($request->class_id == "" || $request->grade_id == ""){
            session()->flash('error','Chưa chọn khối hoặc lớp!');
            return redirect()->back();
        }
        if ($request->has('check')) {
            foreach ($_POST['check'] as $id) {
                $kid = Kid::find($id);
                $data['class_id'] = $request->class_id;
                $kid->update($data);
            }
            foreach ($_POST['check'] as $id) {
                $history = new History();
                $history->class_id = $request->class_id;
                $history->kid_id = $id;
                $history->date = date("Y-m-d");
                $history->status = '1';
                $history->save();
            }
            session()->flash('message','Xếp lớp thành công!');
            return redirect()->back();
        }
        else{
            session()->flash('error','Chưa chọn học sinh!');
            return redirect()->back();
        
        }
    }
    public function searchByGrade(Request $request)
    {    
        if ($request->ajax()) {
            $school_year_id = SchoolYearModel::orderBy('id', 'desc')->limit(1)->first()->id;
            $classes = Classes::where("grade_id",$request->grade_id)
                        ->where("school_year_id", $school_year_id)
                        ->select('id', 'name')->get();

            $kids = Kid::where("grade_id",$request->grade_id)->where("class_id", null)->get();
            $response = [
                            'classes' => $classes,
                            'kids' => $kids,
                        ];
                        

            return response()->json($response);
            

		
    }
}
}