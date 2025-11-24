<template>
  <div id="app">
    <div class="shouye">
      <h1 class="zuo">Ningjin Legu grain Equipment Co., Ltd.</h1>
      <span class="you">phone:+86 15605448657</span>
    </div>
    <div class="daohanglan">
      <div class="daohanglan1">
        <router-link 
          to="/" 
          class="zitiyase" 
          :class="{ 'active': activeNav === '首页' }"
          @click="setActiveNav('首页')"
        >
          home page
        </router-link>
        
        <!-- 把公司介绍的a标签改成router-link，去掉锚点 -->
        <router-link 
          to="/CompanyIntroduction" 
          class="zitiyase" 
          :class="{ 'active': activeNav === '公司介绍' }"
          @click="setActiveNav('公司介绍')"
        >
          company introduction
        </router-link>

        <router-link 
          to="/gongyingchanpin" 
          class="zitiyase" 
          :class="{ 'active': activeNav === '供应产品' }"
          @click="setActiveNav('供应产品')"
        >
          Supply products
        </router-link>
        
        <router-link 
          to="/RencaiZhaopin" 
          class="zitiyase" 
          :class="{ 'active': activeNav === '人才招聘' }"
          @click="setActiveNav('人才招聘')"
        >
          talent recruitment

        </router-link>
        
        <router-link 
          to="/lianxiwomen" 
          class="zitiyase" 
          :class="{ 'active': activeNav === '联系方式' }"
          @click="setActiveNav('联系方式')"
        >
          contact information
        </router-link>

      </div>
    </div>

    <!-- 路由视图出口：所有页面都会在这里渲染 -->
    <router-view />

    <!-- 底部区域 -->
    <footer class="footer">
      <div class="footer-columns">
        <div class="footer-column">
          <h3>Quick Navigation</h3>
          <a href="#">company profile</a>
          <a href="#">Enterprise Map</a>
          <a href="#">join us</a>
        </div>
        <div class="footer-column">
          <h3>product center</h3>
          <a href="#">enterprise procurement</a>
          <a href="#">press center</a>
          <a href="#">Management Entrance</a>
        </div>
        <div class="footer-column">
          <h3>honor and qualification</h3>
          <a href="#">good faith file</a>
        </div>
        <div class="footer-column">
          <h3>Contact Us</h3>
          <p>Address: Ningjin Legu Equipment Co., Ltd., Xiangjiang Street, Ningjin County, Dezhou City, Shandong Province</p>
          <p>postcode</p>
          <p>phone:+86 13723925197</p>
        </div>
        <div class="footer-column"> 
          <h3>联系我</h3>
          <div class="qrcode-placeholder">
            <span><img src="../src/assets/erwei.png" alt="公众号二维码" style="width: 100px;height: 100px;"></span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeNav: '首页',
      name: 'ProductCenter' // 这个数据未被使用，可以删除
    };
  },
  methods: {
    setActiveNav(nav) {
      this.activeNav = nav;
    }
  }
};
</script>

<style>
/* --- 基础与重置 --- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 添加平滑滚动效果 */
html {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #02dac171;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* --- 头部区域 --- */
.shouye {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.zuo {
  font-size: 1.5rem;
}

.you {
  font-size: 1rem;
}

/* --- 导航栏 --- */
.daohanglan {
  width: 100%;
  background-color: #032a4d;
  padding: 10px 0;
}

.daohanglan1 {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
}

/* 导航栏链接样式（保持与原span一致） */
.zitiyase {
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none; /* 去掉链接下划线 */
}

.zitiyase:hover, .zitiyase.active {
  background-color: #ee551f;
  font-weight: bold;
}

/* --- 页脚 --- */
.footer {
  background-color: #032a4d;
  color: #fff;
  padding: 40px 0;
  margin-top: 40px;
}

.footer-columns {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  margin: 0 10px 20px;
  text-align: left;
}

.footer-column h3 {
  border-bottom: 2px solid #ee551f;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.footer-column a {
  display: block;
  color: #ccc;
  text-decoration: none;
  padding: 5px 0;
}

.footer-column a:hover {
  color: #ee551f;
}

.qrcode-placeholder {
  width: 120px;
  height: 120px;
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 10px;
}

/* --- 响应式调整 --- */
@media (max-width: 768px) {
  .shouye {
    flex-direction: column;
    height: auto;
    padding: 20px 0;
  }
  
  .zuo, .you {
    margin: 5px 0;
  }
  
  .footer-columns {
    flex-direction: column;
    align-items: center;
  }
  
  .footer-column {
    text-align: center;
  }
  
  .qrcode-placeholder {
    margin: 10px auto;
  }
}
</style>