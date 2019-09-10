<template>
  <div class="homeHeader">
    <!-- hh_wrap1 -->
    <div class="hh_wrap1">
      <!-- hh_inner_wrap1 -->
      <div class="hh_inner_wrap1">
        <h1>
          We Travel
          <br>
          We Are Gotgam!
        </h1>
        <p>
          식상한 여행은 그만!
          <br>
          곶감과 기분을 공유하며 현지인들이 추천하는
          숨겨진 명소를 알아내고 지역의 감성을 느껴보세요.
        </p>

        <!-- hh_form_wrap -->
        <div class="hh_form_wrap">

          <!-- desti_wrap -->
          <div class="desti_wrap">
            <div class="desti_form">
              <div class="desti_icon"></div>
              <div class="desti_input">
                <input type="text">
              </div>
            </div>
          </div>
          <!-- desti_wrap END -->

          <!-- etc_wrap -->
          <div class="etc_wrap">
            <div class="day_form">
              <div class="day_icon"></div>
              <div class="day_input">
                <input type="text">
              </div>
            </div>

            <div class="mood_form">
              <div class="mood_icon"></div>
              <div class="mood_input">
                <input type="text">
              </div>
            </div>

            <div class="search_form">
              <div class="search_btn btn btn-success">
                <span>Search</span>
              </div>
            </div>
          </div>
          <!-- etc_wrap END -->
        </div>
        <!-- hh_form_wrap END -->
      </div>
      <!-- hh_inner_wrap1 END -->
    </div>
    <!-- hh_wrap1 END -->

    <!-- hh_wrap2 -->
    <div class="hh_wrap2">
      <!-- hh_inner_wrap2 -->
      <div class="hh_inner_wrap2">
        <img src="../assets/jade.png" alt="">
        
        <!-- subscri_wrap -->
        <div class="subscri_wrap">
          <!-- subscri_inner_wrap -->
          <div class="subscri_inner_wrap">
            <a>Fishing in the wild Alagnak River</a>
            <p>Hosted-by Planet Fly Fishing in United States of America</p>
          </div>
          <!-- subscri_inner_wrap END -->
        </div>
        <!-- subscri_wrap END -->

      </div>
      <!-- hh_inner_wrap2 END -->
    </div>
    <!-- hh_wrap2 END -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.homeHeader {
    width: 98%;
    margin: 0 auto;
    padding: 3.4rem 0;
    box-sizing: border-box;
    display: flex;
}

.hh_wrap1 {
  flex: 1;
  display: flex;
  align-items: center;
}

.hh_wrap2 {
  flex: 1;
  display: flex;
  align-items: center;
}

.hh_inner_wrap2 {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.hh_inner_wrap2 img {
  width: 100%;
  display: flex;
}

.subscri_wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>