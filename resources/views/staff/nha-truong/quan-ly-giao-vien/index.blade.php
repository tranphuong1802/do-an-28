@extends('./staff/nha-truong/layouts/layout')
@section('title','Danh sách giáo viên')
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
                                        <div class="ml-4 dropdown pt-3 pb-4 mt-2">
                                            <button class="mr-2 border-success bg-white btn btn-secondary dropdown-toggle" type="button"
                                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Lọc theo trạng thái
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="{{route('nha-truong.giao-vien.list')}}">Tất cả</a>
                                                <a class="dropdown-item" href="{{route('nha-truong.giao-vien.list')}}?status=1">Hoạt động</a>
                                                <a class="dropdown-item" href="{{route('nha-truong.giao-vien.list')}}?status=2">Khóa</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-md-none m--margin-bottom-10"></div>
                                </div>
                                <form action="" class="d-flex">
                                
                                <div class="col-md-12">
                                
                                    <div class="m-input-icon m-input-icon--left">
                                        <input value="{{request()->get('fullname')}}" name="fullname" id="searchByName" type="text" class="form-control m-input m-input--solid"
                                            placeholder="Tìm kiếm qua tên">
                                        <span class="m-input-icon__icon m-input-icon__icon--left">
                                            <span><i class="la la-search"></i></span>
                                        </span>
                                    </div>
                                    <div class="d-md-none m--margin-bottom-10"></div>

                                </div>
                                <div class="col-md-3">
                                    <div class="m-input-icon m-input-icon--left">
                                        <button type="submit" class="btn btn-secondary">Tìm kiếm</button>
                                    </div>
                                </div>
                                </form>
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
                    <a href="{{route('nha-truong.giao-vien.them')}}"
                        class="btn btn-success m-btn m-btn--icon m-btn--wide m-btn--md m--margin-right-10">
                        <span>
                            <i class="la la-plus"></i>
                            <span>Thêm giáo viên</span>
                        </span>
                    </a>
                </div>
            </div>
            <div class="m-portlet__body">

                <form class="m-form m-form--label-align-left- m-form--state-" id="m_form">
                    <div class="">
                        <div class="row">
                            <div class="table-responsive">
                            <table
                                    class="table table-striped- table-bordered table-hover table-checkable dataTable dtr-inline"
                                    id="m_table_1" role="grid" aria-describedby="m_table_1_info"
                                    style="min-width: 954px;width:100%">
                                    <thead>
                                        <tr>
                                            <th rowspan="1" colspan="1">ID</th>
                                            <th rowspan="1" colspan="1">Tên GV</th>
                                            <th rowspan="1" colspan="1">Ảnh</th>
                                            <th rowspan="1" colspan="1">SĐT</th>
                                            <th rowspan="1" colspan="1">Email</th>
                                            <th rowspan="1" colspan="1">Trạng Thái</th>
                                            <th rowspan="1" colspan="1">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th rowspan="1" colspan="1">ID</th>
                                            <th rowspan="1" colspan="1">Tên GV</th>
                                            <th rowspan="1" colspan="1">Ảnh</th>
                                            <th rowspan="1" colspan="1">SĐT</th>
                                            <th rowspan="1" colspan="1">Email</th>
                                            <th rowspan="1" colspan="1">Trạng Thái</th>
                                            <th rowspan="1" colspan="1">
                                            </th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                    @if(count($teachers) == 0)
                                    <tr>
                                        <th colspan="8" class="text-center"><label class="col-lg-10 text-danger">Không tìm thấy giáo viên nào!</label> </th>
                                    </tr>
                                    @endif
                                        @foreach ($teachers as $teacher)
                                        <tr role="row" class="odd">
                                            <td class="sorting_1" tabindex="0">{{$teacher->id}}</td>
                                            <td>{{$teacher->fullname}}</td>
                                            <td>
                                                <img src="{{asset('upload/avatar/'.$teacher->avatar)}}" alt="avatar"
                                                    width="100px">
                                            </td>
                                            <td>{{$teacher->phone}}</td>
                                            <td>{{$teacher->email}}</td>

                                            @if($teacher->status == 0)
                                            <td class="text-danger"> Khóa </td>
                                            @else
                                            <td class="text-success"> Hoạt động </td>
                                            @endif
                                            </td>

                                            <td>
                                                <a href="{{ route('nha-truong.giao-vien.sua', $teacher->id) }}"
                                                    class="btn btn-warning btn-sm ">Chi tiết</a>&nbsp;
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
                        <div class="dataTables_paginate paging_simple_numbers" id="m_table_1_paginate">
                            <ul class="pagination">
                                {{ $teachers->links() }}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

@endsection