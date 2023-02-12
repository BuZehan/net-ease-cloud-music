<template>
    <div class="xtx-skeleton" :style="{width,height}" :class="{shan:animated}">
      <!-- 1 盒子-->
      <div class="block" :style="{backgroundColor:bg}"></div>
      <!-- 2 闪效果 xtx-skeleton 伪元素 --->
    </div>
  </template>
  <script>
  export default {
    name: 'AppSkeleton',
    // 使用的时候需要动态设置 高度，宽度，背景颜色，是否闪下
    props: {
      bg: {
        type: String,
        default: '#efefef'
      },
      width: {
        type: String,
        default: '100px'
      },
      height: {
        type: String,
        default: '100px'
      },
      animated: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  <style scoped lang="less">
  .xtx-skeleton {
    display: inline-block;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    .block {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    animation: fade 2s ease 0s infinite alternate;

    }
  }
  .shan {
    &::after {
      content: "";
      position: absolute;
      animation: shan 1.5s linear 0s infinite;
      top: 0;
      width: 20%;
      height: 100%;
      background: linear-gradient(
        to left,
        rgba(132, 132, 132, 0) 0,
        rgba(255, 255, 255, 0.521) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: skewX(-45deg);
    }
  }
  @keyframes shan {
    0% {
      left: -100%;
    }
    100% {
      left: 140%;
    }
  }
  @keyframes fade {
    0% {
      background-color: #ccc;
    }
    100% {
      background-color: #ddd;
    }
  }
  </style>