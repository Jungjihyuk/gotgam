<template>
  <div class="registration_wrap">
      <div class="registration_inner_wrap">
          <!-- .container -->
          <div class="container">
            <!-- .stepwizard -->
            <div class="stepwizard col-md-offset-3">
                <div class="stepwizard-row setup-panel">
                <div class="stepwizard-step">
                    <a href="#step-1" type="button" class="btn btn-primary btn-circle">1</a>
                    <p>Step 1</p>
                </div>
                <div class="stepwizard-step">
                    <a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
                    <p>Step 2</p>
                </div>
                <div class="stepwizard-step">
                    <a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
                    <p>Step 3</p>
                </div>
                </div>
            </div>

            <form role="form" action="" method="post" class="step-1">
                <!-- step-1 -->
                <h3>곶감 등록</h3>
                <div class="row setup-content justify-content-end" id="step-1">
                    <!-- step-1-1 -->
                    <div class="col-xs-12 col-md-6 step-1-1">
                        <div class="col-md-12">
                            <div class="img_uploader_wrap">
                                <label for="fileInput" slot="upload-label">
                                    <!-- <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <path class="path1" d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"></path>
                                        </svg>
                                    </figure> -->
                                    <span class="upload-caption">{{ hasImage ? "Replace" : "Click to upload" }}</span>
                                </label>
                                <image-uploader
                                :preview="true"
                                :className="['fileinput', { 'fileinput--loaded': hasImage }]" capture="environment"
                                :debug="1"
                                doNotResize="gif"
                                :autoRotate="true"
                                outputFormat="verbose"
                                @input="setImage"
                                >
                                </image-uploader>
                            </div>
                            <div class="form-group">
                                <label class="control-label">곶감 제목</label>
                                <input maxlength="100" type="text" required="required" class="form-control" placeholder="제목을 입력해주세요...">
                            </div>
                            <div class="form-group">
                                <label class="control-label">곶감 스토리(내용)</label>
                                <textarea required="required" class="form-control gotgamStory" placeholder="회원들과 곶감을 공유해주세요..."></textarea>
                            </div>
                        </div>
                    </div>

                    <!-- step-1-2 -->
                    <div class="col-xs-12 col-md-6 step-1-2">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label">인원수</label>
                                <input maxlength="100" type="text" required="required" class="form-control" placeholder="몇명이서 갔나요?">
                            </div>
                            <div class="form-group">
                                <label class="control-label">여행 일수</label>
                                <input maxlength="100" type="date" required="required" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="control-label">기분</label>
                                <input maxlength="100" type="date" required="required" class="form-control" placeholder="너의 기분은?">
                            </div>
                            <div class="form-group">
                                <label class="control-label">날씨 선택</label>
                                <div class="d_weather">
                                    <select name="" id="">
                                        <option value=""> -- 당시 날씨는? -- </option>
                                    </select>
                                </div>
                            </div>
                            <!-- <button class="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button> -->
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-6 button_Wrap">
                        <div class="col-12">
                            <button class="btn btn-primary nextBtn btn-lg pull-right w-100" type="button">Next</button>
                        </div>
                    </div>

                </div>
                <div class="row setup-content" id="step-2">
                <div class="col-xs-6 col-md-offset-3">
                    <div class="col-md-12">
                    <h3> Step 2</h3>
                    <div class="form-group">
                        <label class="control-label">Company Name</label>
                        <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Name">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Company Address</label>
                        <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Address">
                    </div>
                    <button class="btn btn-primary prevBtn btn-lg pull-left" type="button">Previous</button>
                    <button class="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>
                    </div>
                </div>
                </div>
                <div class="row setup-content" id="step-3">
                <div class="col-xs-6 col-md-offset-3">
                    <div class="col-md-12">
                    <h3> Step 3</h3>
                    <button class="btn btn-primary prevBtn btn-lg pull-left" type="button">Previous</button>
                    <button class="btn btn-success btn-lg pull-right" type="submit">Submit</button>
                    </div>
                </div>
                </div>
            </form>

            </div>
      </div>
  </div>
</template>

<script>
import Header from './header.vue';

export default {
    components: {
        Header
    },
    data() {
        return {
            link: "registration",
            hasImage: false,
            image: null
        }
    },

    methods: {
        setImage: function(output) {
        this.hasImage = true;
        this.image = output;
        console.log(this.image);
        }
    }
}
</script>

<style>

</style>
