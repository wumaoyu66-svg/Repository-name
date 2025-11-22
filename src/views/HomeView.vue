<template>
  <div class="home-view">
    <!-- 原来 App.vue 中的 banner 区域 -->
    <div class="banner">
      <img src="https://ts1.tc.mm.bing.net/th/id/R-C.e73da2e75c6f8fb0b0d7822d0228b85c?rik=A5vaVOxMwvl23w&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd10122%2f56%2fw2000h1256%2f20200610%2f572c-iuvaazp0138823.jpg&ehk=DCgrtxOMMbew%2fPtvRiGyflsFxIkD9RPaPbapbdQ%2frHI%3d&risl=&pid=ImgRaw&r=0" 
           alt="Company Banner">
    </div>

    <!-- 原来的产品中心标题 -->
    <div class="product-center">
      <h2>PRODUCT CENTER</h2>
    </div>

    <!-- 原来的主体内容区 -->
    <div class="main-content">
      <h1>推荐产品</h1>
      <div class="content-wrapper">
        <!-- 侧边栏 -->
        <div class="sidebar">
          <div class="sidebar-module">
            <div class="module-header">
              <span>company introduction</span>
            </div>
            <div class="module-content">
              <span>good faith file</span>
              <span>contact information</span>
            </div>
          </div>
          <div class="sidebar-module">
            <div class="module-header">
              <span>company introduction</span>
            </div>
            <div class="module-content">
              <span>No news for now.</span>
            </div>
          </div>
          <div class="sidebar-module">
            <div class="module-header">
              <span>product classification</span>
            </div>
            <div class="module-content">
              <span>No category yet.</span>
            </div>
          </div>
        </div>

        <!-- 主要内容区：公司介绍（含锚点目标 id="company-intro"） -->
        <div class="content-area" id="company-intro">
          <div class="intro-header">company introduction</div>
          <div class="company-intro">
            <p>&nbsp;&nbsp;Ningjin County Legu grain Machinery Equipment Co., Ltd. is located in the eastern new district of the technology industry in Ningjin County, Dezhou, Shandong Province. It is a comprehensive enterprise integrating the design, production, sales and installation of flour machines.</p>
            <p>&nbsp;&nbsp;The company covers an area of over 30,000 square meters, has 198 employees, and is equipped with advanced five-axis CNC machining centers, 10,000-kilowatt laser cutting machines and other advanced equipment.</p>
            <p>&nbsp;&nbsp;The company has a research and development center, a production and marketing operation center, a customer service management department, and its products are sold in over 20 provinces and cities as well as in Africa. More than 40 countries and regions including the Middle East and Southeast Asia have their products that can meet the diverse needs of domestic and international customers, and are highly praised by users.</p>
            <p>The company adheres to the business philosophy of "Quality First, Customer Supreme", providing customers with comprehensive technical consultation and high-quality after-sales service.</p>
          </div>
          <div class="company-details">
            <div class="detail-row">
              <span>company name:</span><span>Ningjin Legu grain Machinery Equipment Co., Ltd.</span>
              <span>company type:</span><span>machinery equipment manufacturer</span>
            </div>
            <div class="detail-row">
              <span>location:</span><span>Shandong Province, Dezhou City, China</span>
              <span>scale of company:</span><span> 30,000+㎡</span>
            </div>
            <div class="detail-row">
              <span>registered capital:</span><span>To be filled</span>
              <span>Registration year:</span><span>To be filled</span>
            </div>
            <div class="detail-row">
              <span>Data verification:</span><span>To be verified</span>
            </div>
            <div class="detail-row">
              <span>Guarantee Deposit:</span><span>No payment has been made.</span>
            </div>
            <div class="detail-row">
              <span>business model:</span><span>Production-oriented, trading-oriented</span>
            </div>
            <div class="detail-row">
              <span>business scope:</span><span>Complete set of flour machinery equipment, grain cleaning machine, wheat washing machine, mixing tank, mixed grain grinder, husking machine, milling machine for grains</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'HomeView' // 组件名与文件名一致，适配路由配置
};
</script>

<style scoped>
/* 首页专属样式（完全复制原 App.vue 中相关样式） */
.banner img {
  width: 100%;
  height: auto;
  display: block;
}

.product-center {
  width: 100%;
  padding: 20px 0;
}

.main-content {
  flex-grow: 1;
  width: 90%;
  margin: 20px auto;
}

.main-content h1 {
  margin-bottom: 20px;
}

.content-wrapper {
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
}

.sidebar-module {
  background-color: #2a0202;
  color: #fff;
  margin-bottom: 10px;
}

.module-header {
  background-color: #032a4d;
  padding: 15px;
  text-align: left;
}

.module-content {
  padding: 15px;
  text-align: left;
}

.module-content span {
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid #3a1212;
}

.content-area {
  flex-grow: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}

.intro-header {
  background-color: #032a4d;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 15px 20px;
  text-align: left;
  margin-bottom: 20px;
  border-radius: 4px 4px 0 0;
}

.company-intro p {
  margin-bottom: 15px;
  text-align: left;
  line-height: 1.6;
}

.company-details {
  margin-top: 30px;
  background-color: #032a4d;
  color: white;
  padding: 20px;
  border-radius: 4px;
}

.detail-row {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  border-bottom: 1px solid #053a6d;
}

.detail-row span:nth-child(odd) {
  width: 120px;
  flex-shrink: 0;
  font-weight: bold;
  color: #ee551f;
}

.detail-row span:nth-child(even) {
  flex-grow: 1;
}

/* 响应式调整（适配移动端） */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>