<template>
  <div @click="clickHandle" class="index-content">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div>获取的时间戳：{{timeToken}}</div>
    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>


    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import {post} from '@/utils/api.js'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      timeToken: ''
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    // 利用fly获取时间戳
    async getTimeToken () {
      const params = {
        url: 'validate/getIdentifyingCode',
        data: {}
      }
      const {__statusCode, data} = await post(params)
      if (__statusCode === '1') {
        this.timeToken = data.IdentifyingCode
      }
    }
  },

  created () {
    this.getTimeToken()
    // let app = getApp()
  }
}
</script>

<style scoped lang="scss">
.index-content {
  width: 100%;
  height: 100%;
  background-color: aqua;
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: antiquewhite;
  }
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }
  .all{
    width:7.5rem;
    height:1rem;
    background-color:blue;
  }
  .all:after{
    display:block;
    content:'';
    clear:both;
  }
  .left{
    float:left;
    width:3rem;
    height:1rem;
    background-color:red;
  }

  .right{
    float:left;
    width:4.5rem;
    height:1rem;
    background-color:green;
  }
}
</style>
