@extends('./staff/giao-vien/layouts/layout')
@section('title','Danh sách học sinh')
@section('content')
<div class="m-grid__item m-grid__item--fluid m-wrapper m-3 ">
    <div class="">
        <div class="m-portlet m-portlet--mobile">
            <div class="m-portlet__body">
                <div class="m-form m-form--label-align-right  ">
                    <div class="row align-items-center">
                        <div class="col-xl-12 order-2 order-xl-1">
                            <div class="form-group m-form__group row align-items-center">
                                <div class="col-md-3">
                                    <div class="m-form__group m-form__group--inline">
                                        <div class="m-form__label">
                                            <label>Status:</label>
                                        </div>
                                        <div class="m-form__control">
                                            <select class="form-control m-bootstrap-select m-bootstrap-select--solid"
                                                id="m_form_status">
                                                <option value="">All</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="d-md-none m--margin-bottom-10"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="m-form__group m-form__group--inline">
                                        <div class="m-form__label">
                                            <label class="m-label m-label--single">Type:</label>
                                        </div>
                                        <div class="m-form__control">
                                            <select class="form-control m-bootstrap-select m-bootstrap-select--solid"
                                                id="m_form_type">
                                                <option value="">All</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="d-md-none m--margin-bottom-10"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="m-input-icon m-input-icon--left">
                                        <input type="text" class="form-control m-input m-input--solid"
                                            placeholder="Search..." id="generalSearch">
                                        <span class="m-input-icon__icon m-input-icon__icon--left">
                                            <span><i class="la la-search"></i></span>
                                        </span>
                                    </div>
                                    <div class="d-md-none m--margin-bottom-10"></div>

                                </div>
                                <div class="col-md-3">
                                    <div class="m-input-icon m-input-icon--left">
                                        <button type="button" class="btn btn-secondary">Tìm kiếm</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="m_datatable" id="column_rendering"></div>

            </div>
        </div>
        <div class="m-portlet m-portlet--mobile">
            <div class="m-portlet__head">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">
                            @yield('title')
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">
                    <a href="{{route('nha-truong.nha-truong.index')}}"
                        class="btn btn-secondary m-btn m-btn--icon m-btn--wide m-btn--md m--margin-right-10">
                        <span>
                            <i class="la la-arrow-left"></i>
                            <span>Quay lại</span>
                        </span>
                    </a>
                    <a href="{{route('nha-truong.tre.create')}}"
                        class="btn btn-success m-btn m-btn--icon m-btn--wide m-btn--md m--margin-right-10">
                        <span>
                            <i class="la la-plus"></i>
                            <span>Thêm trẻ</span>
                        </span>
                    </a>
                </div>
            </div>
            <div class="m-portlet__body">

                <form class="m-form m-form--label-align-left- m-form--state-" id="m_form">

                    <!--begin: Form Body -->
                    <div class="">
                        <div class="row">
                            <div class="table-responsive">
                                <table
                                    class="table table-striped- table-bordered table-hover table-checkable dataTable dtr-inline"
                                    id="m_table_1" role="grid" aria-describedby="m_table_1_info"
                                    style="min-width: 990px;width:100%">
                                    <thead>

                                        <tr>
                                            <th rowspan="1" colspan="1">ID</th>
                                            <th rowspan="1" colspan="1">Ảnh đại diện</th>
                                            <th rowspan="1" colspan="1">Họ và Tên</th>
                                            <th rowspan="1" colspan="1">Giới tính</th>
                                            <th rowspan="1" colspan="1">Ngày sinh</th>
                                            <th rowspan="1" colspan="1">Địa chỉ</th>
                                            <th rowspan="1" colspan="1">Trạng thái</th>
                                            <th rowspan="1" colspan="1"></th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th rowspan="1" colspan="1">ID</th>
                                            <th rowspan="1" colspan="1">Ảnh đại diện</th>
                                            <th rowspan="1" colspan="1">Họ và Tên</th>
                                            <th rowspan="1" colspan="1">Giới tính</th>
                                            <th rowspan="1" colspan="1">Ngày sinh</th>
                                            <th rowspan="1" colspan="1">Địa chỉ</th>
                                            <th rowspan="1" colspan="1">Trạng thái</th>
                                            <th rowspan="1" colspan="1"></th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        @foreach($classes->kids as $kid)
                                        <tr role="row" class="odd">
                                            <td class="sorting_1" tabindex="0">{{$kid->id}}</td>
                                            <td>
                                                <img src="{{asset('/upload/avatar/'.$kid->kid_avatar)}}" alt="avatar"
                                                    style="width:50px;border-radius: 10px;">
                                            </td>
                                            <td>{{$kid->kid_name}}</td>
                                            <td>
                                                @if($kid->gender == 1)
                                                Nam
                                                @elseif($kid->gender == 0)
                                                Nữ
                                                @endif
                                            </td>
                                            <td>{{$kid->date_of_birth}}</td>
                                            <td style="width:22%"><span>{{$kid->address}}</span></td>
                                            <td class="text-success"> Đang học </td>
                                            <td>
                                            <a href="{{route('giao-vien.xem-thong-tin-tre',['id'=>$kid->id])}}"
                                                    class="btn btn-warning btn-sm ">Chi
                                                    tiết</a>
                                                    
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                                <div id="m_table_1_processing" class="dataTables_processing card"
                                    style="display: none;">
                                    Processing...</div>
                            </div>
                        </div>
                      
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection