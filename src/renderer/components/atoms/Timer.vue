<template>
  <div class="clock-wrap">
    <div class="hour-wrap">
      <div class="digit-top">
        <div class="front">{{hour}}</div>
      </div>
      <div class="digit-bottom">
        <div class="front">{{hour}}</div>
      </div>
    </div>
    <div class="min-wrap">
        <div class="digit-top">
          <div class="front">{{minute}}</div>
        </div>
        <div class="digit-bottom">
          <div class="front">{{minute}}</div>
        </div>
    </div>
    <div class="sec-wrap">
      <div class="digit-top">
        <div class="front">{{second}}</div>
      </div>
      <div class="digit-bottom">
        <div class="front">{{second}}</div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'timer',
  props: {
    hour: String,
    minute: String,
    second: String
  }
}
</script>

<style lang="scss" scoped>
$green:#16a085;
$grey:#ededed;

.clock-wrap{
  background-color:$green;
  -webkit-font-smoothing: antialiased;
  text-align:center;
  width:610px;
  font-family: 'Pathway Gothic One', sans-serif;
  height:200px;
  margin:20px auto 30px auto;
  padding:15px;
}

.min-wrap,
.hour-wrap, .sec-wrap{
  width:200px;
  height:200px;
  float:left;
  position: relative;
}

.min-wrap, .sec-wrap{
  margin-left: 4px;
}

.digit-top, 
.digit-bottom{
  width:200px;
  height:100px;
  position: absolute;
}

.clock-wrap .front, .clock-wrap .back{
  width: 200px;
  height: 100px;
  position: absolute;
  overflow: hidden;
  background:#ffffff;
  color:$green;
  text-align: center;
  font-size: 150px;
  transition: transform 800ms, z-index 800ms;
  -moz-transition: -moz-transform 800ms, z-index 800ms;
}

.clock-wrap .front{
  z-index: 30;
  transform-origin: 0px 100px;
  transform: rotateX(0deg);
  backface-visibility: hidden;
}

.clock-wrap .back{
  z-index: 20;
  top:100px;
  transform-origin: 0px 0;
  transform: rotateX(180deg);
  backface-visibility: hidden;
  line-height:0;
}


.digit-top{
  line-height:200px;
  top:0;
  z-index: 10;
}

.digit-bottom{
  top: 100px;
  line-height:0;
  z-index: 0;
  background:lighten($grey,20);
}


.hour-wrap:before, .min-wrap:before, .sec-wrap:before {
  content:"";
  background:#000000;
  opacity:0.04;
  position:absolute;
  width:200px;
  height:100px;
  top:0;
  left:0;
  z-index:9999;
}

</style>
