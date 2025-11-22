<template>
  <div class="product-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <h2>SUPPLY PRODUCTS</h2>
      <p>High-Quality Machinery Equipment for Flour Production & Grain Processing</p>
    </div>
    <!-- 产品列表 -->
    <div class="product-list">
      <!-- 原有产品1：整套面粉机械 -->
      <div class="product-card">
        <img 
          src="../assets/50mianfenji.jpg" 
          alt="50-ton Grain Processing Workshop" 
          class="product-img"
        >
        <div class="product-info">
          <h3>50-type flour mill</h3>
          <div class="product-tags">
            <span>Full Automation</span>
            <span>High Efficiency</span>
            <span>Energy Saving</span>
          </div>
          <p class="product-desc">
           The 50-type grain processing equipment can process crops such as wheat, safflower wheat, buckwheat, barley, and corn. When processing 700 kilograms of wheat, it can produce 500 kilograms of flour.
          </p>
          <div class="product-spec">
            <p><strong>Power:</strong> 21.2kW</p>
            <p><strong>Weight:</strong> 1.3~1.4 Ton</p>
            <p><strong>Warranty:</strong> 12 Months</p>
          </div>
          <button class="inquire-btn" @click="handleInquire('Complete Set of Flour Machinery')">Inquire Now</button>
        </div>
      </div>

         <!-- 40型面粉加工机械 -->
      <div class="product-card">
        <img 
          src="../assets/40xing.jpg" 
          alt="Grain Cleaning Machine" 
          class="product-img"
        >
        <div class="product-info">
          <h3>40-type flour mill</h3>
          <div class="product-tags">
            <span>Full Automation</span>
            <span>High Efficiency</span>
            <span>Energy Saving</span>
          </div>
          <p class="product-desc">
            The 40-type grain processing equipment can process crops such as wheat, safflower wheat, buckwheat, barley, and corn. When processing 500 kilograms of wheat, it can produce 350 kilograms of flour.
          </p>
          <div class="product-spec">
            <p><strong>Power:</strong> 15</p>
            <p><strong>Weight:</strong> 1.2~1.3 Ton</p>
            <p><strong>Warranty:</strong>12 Months</p>
          </div>
          <button class="inquire-btn" @click="handleInquire('Grain Cleaning Machine')">Inquire Now</button>
        </div>
      </div>

      <!-- 洗麦机 -->
      <div class="product-card">
        <img 
          src="../assets/xiamiji2.jpg" 
          alt="Mixed Grain Grinder" 
          class="product-img"
        >
        <div class="product-info">
          <h3>wheat washer</h3>
          <div class="product-tags">
            <span>Washing wheat</span>
            <span>Dry the wheat</span>
          </div>
          <p class="product-desc">
          Clean the dirt off the surface of the wheat. Process 1,000 to 1,200 kilograms of wheat.
          </p>
          <div class="product-spec">
            <p><strong>Power:</strong> 1.5+0.7</p>
            <p><strong>Weight:500 kilograms</strong></p>
            <p><strong>Warranty:12 Months</strong></p>
          </div>
          <button class="inquire-btn" @click="handleInquire('Mixed Grain Grinder')">Inquire Now</button>
        </div>
      </div>

      <!-- 原有产品4：小麦清洗机 -->
      <div class="product-card">
        <img 
          src="../assets/qingliangjiximaiji.jpg" 
          alt="Wheat Washing Machine" 
          class="product-img"
        >
        <div class="product-info">
          <h3>Grain cleaning machine</h3>
          <div class="product-tags">
            <span>Full Automation</span>
            <span>High Efficiency</span>
            <span>Energy Saving</span>
          </div>
          <p class="product-desc">
         The cleaning machine is responsible for removing stones, grass seeds, straw, and other debris from inside. It is also equipped with a washing machine that cleans the dust off the surface of the wheat.
          </p>
          <div class="product-spec">
            <p><strong>wheat washer:</strong> 1.5+0.7kw</p>
            <p><strong>Grain cleaning machine:</strong> 3kw</p>
            <p><strong>Warranty:</strong> 12 Months</p>
          </div>
          <button class="inquire-btn" @click="handleInquire('Wheat Washing Machine')">Inquire Now</button>
        </div>
      </div>

<!-- 双组面粉机 -->
      <div class="product-card">
        <img 
          src="../assets/shuangzu.jpg" 
          alt="Single Group Flour Machine" 
          class="product-img"
        >
        <div class="product-info">
          <h3>Double-group flour mill</h3>
          <div class="product-tags">
            <span>Compact Structure</span>
            <span>Low Investment</span>
            <span>Easy Maintenance</span>
          </div>
          <p class="product-desc">
         The dual-feed flour mill processes 800-900 kilograms of wheat using the skin-core separation technology. It features a dual 40 grinding head and produces flour that is white in color and has a good texture.
          </p>
          <div class="product-spec">
            <p><strong>Power:</strong> 11+7.5+7.5kW</p>
            <p><strong>Wheat for processing:</strong> 800-900</p>
            <p><strong>Warranty:</strong>12 Months</p>
          </div>
          <button class="inquire-btn" @click="handleInquire('Single Group Flour Machine')">Inquire Now</button>
        </div>
      </div>
<!-- 四组面粉机 -->
      <div class="product-card">
        <img 
          src="../assets/sizu.jpg" 
          alt="Double Group Flour Machine" 
          class="product-img"
        >
        <div class="product-info">
          <h3>Four group of flour mill</h3>
          <div class="product-tags">
            <span>Two-Stage Grinding</span>
            <span>High Flour Yield</span>
            <span>Stable Performance</span>
          </div>
          <p class="product-desc">
        It is constructed with four grinding heads, uses the overall paint-coating process, and employs nine circular rollers. One Shakeron can finish the surface in one go, and it is equipped with an automatic feeding system.
          </p>
          <div class="product-spec">
            <p><strong>Power:</strong> 48kW</p>
            <p><strong>Wheat for processing:</strong>1500</p>
            <p><strong>Warranty:</strong> 12 Months</p>
          </div>
          <button class="inquire-btn" @click="handleInquire('Double Group Flour Machine')">Inquire Now</button>
        </div>
      </div>

      <!-- 杂粮粉碎机 -->
      <div class="product-card">
        <img 
          src="../assets/zalliang.jpg" 
          alt="Four Group Flour Machine" 
          class="product-img"
        >
        <div class="product-info">
          <h3>Mixed Grain Grinder</h3>
          <div class="product-tags">
            <span>Full Automation</span>
            <span>High Efficiency</span>
            <span>Energy Saving</span>
          </div>
          <p class="product-desc">
        Grind the grains, such as grinding corn, soybeans, green beans, red beans, and other grains and crops.
          </p>
          <div class="product-spec">
            <p><strong>Power:</strong> 11kW</p>
            <p><strong>Weight:</strong> 1000</p>
            <p><strong>Warranty:</strong> 12 Months</p>
          </div>
          <button class="inquire-btn" @click="handleInquire('Four Group Flour Machine')">Inquire Now</button>
        </div>
      </div>

      <!-- 搅拌罐 -->
      <div class="product-card">
        <img 
          src="../assets/jiaobanguan.jpg" 
          alt="Six Group Flour Machine" 
          class="product-img"
        >
        <div class="product-info">
          <h3>agitator tank</h3>
          <div class="product-tags">
            <span>Flour processing equipment</span>
            <span>Flour mixing equipment</span>
          </div>
          <p class="product-desc">
        The flour mixing tank can mix 300 to 500 kilograms of flour at a time.
          </p>
          <div class="product-spec">
            <p><strong>Power:</strong> 3kw</p>
            <p><strong>Weight:</strong> 300pounds</p>
            <p><strong>Control Mode:</strong> manual work</p>
          </div>
          <button class="inquire-btn" @click="handleInquire('Six Group Flour Machine')">Inquire Now</button>
        </div>
      </div>

      <!-- 脱皮机 -->
      <div class="product-card">
        <img 
          src="../assets/tupiji.jpg" 
          alt="Eight Group Flour Machine" 
          class="product-img"
        >
        <div class="product-info">
          <h3>stripping machine</h3>
          <div class="product-tags">
            <span>Peeling process</span>
            <span>wheat</span>
            <span>Removing the skins from soybeans</span>
          </div>
          <p class="product-desc">
            The peeling machine can remove the outer skin from the surface of corn, and can be used to process crops such as corn and soybeans that require peeling.
          </p>
          <div class="product-spec">
            <p><strong>Power:</strong> 7.5kw</p>
            <p><strong>Weight:</strong> 400斤</p>
            <p><strong>Warranty:</strong> 12 Months</p>
          </div>
          <button class="inquire-btn" @click="handleInquire('Eight Group Flour Machine')">Inquire Now</button>
        </div>
      </div>

       <!-- 玉米制糁机 -->
      <div class="product-card">
        <img 
          src="../assets/yumizhishenji.jpg" 
          alt="Ten Group Flour Machine" 
          class="product-img"
        >
        <div class="product-info">
          <h3>Grain mashing machine</h3>
          <div class="product-tags">
            <span>Full Automation</span>
            <span>High Efficiency</span>
            <span>Energy Saving</span>
          </div>
          <p class="product-desc">
           Debarking and grinding integrated machine, capable of producing large grains, small grains and corn flour at one time.
          </p>
          <div class="product-spec">
            <p><strong>Power:</strong>7.5kW</p>
            <p><strong>Weight:</strong> 1000 kilograms</p>
            <p><strong>Warranty:</strong>12 Months</p>
          </div>
          <button class="inquire-btn" @click="handleInquire('Ten Group Flour Machine')">Inquire Now</button>
        </div>
      </div>
    </div>

    <!-- 咨询表单 -->
    <div class="inquiry-section">
      <h3>Have Any Questions? Contact Us Directly!</h3>
      <form class="inquiry-form">
        <div class="form-group">
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
        </div>
        <div class="form-group">
          <input type="tel" placeholder="Your Phone Number" required>
          <select required>
            <option value="">Select Product Interested In</option>
            <option value="complete-flour-machinery">Complete Set of Flour Machinery</option>
            <option value="grain-cleaning-machine">Grain Cleaning Machine</option>
            <option value="mixed-grain-grinder">Mixed Grain Grinder</option>
            <option value="wheat-washing-machine">Wheat Washing Machine</option>
            <option value="single-group-flour-machine">Single Group Flour Machine</option>
            <option value="double-group-flour-machine">Double Group Flour Machine</option>
            <option value="four-group-flour-machine">Four Group Flour Machine</option>
            <option value="six-group-flour-machine">Six Group Flour Machine</option>
            <option value="eight-group-flour-machine">Eight Group Flour Machine</option>
            <option value="ten-group-flour-machine">Ten Group Flour Machine</option>
          </select>
        </div>
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit" class="submit-btn">Send Inquiry</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GongyingChanpin',
  props: {
    msg: String
  },
  methods: {
    handleInquire(productName) {
      alert(`You are inquiring about: ${productName}`);
    }
  }
};
</script>

<style scoped>
/* 页面整体样式 */
.product-page {
  width: 90%;
  margin: 0 auto;
  padding: 40px 0;
  font-family: Avenir, Arial, sans-serif;
}

/* 页面标题 */
.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h2 {
  font-size: 2.2rem;
  color: #032a4d;
  margin-bottom: 10px;
  font-weight: bold;
}

.page-header p {
  color: #666;
  font-size: 1.1rem;
}

/* 产品列表：优化网格布局，支持更多产品一行显示 */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

/* 产品卡片 */
.product-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.product-info {
  padding: 25px;
}

.product-info h3 {
  font-size: 1.4rem;
  color: #032a4d;
  margin: 0 0 12px;
}

/* 产品标签 */
.product-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.product-tags span {
  background: #f0f7ff;
  color: #032a4d;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

/* 产品描述 */
.product-desc {
  color: #666;
  line-height: 1.5;
  margin-bottom: 18px;
  font-size: 0.95rem;
}

/* 产品参数 */
.product-spec {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 0.85rem;
}

.product-spec p {
  color: #555;
  margin: 0;
}

.product-spec strong {
  color: #032a4d;
}

/* 咨询按钮 */
.inquire-btn {
  background: #ee551f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.inquire-btn:hover {
  background: #d44a16;
}

/* 咨询表单区域 */
.inquiry-section {
  background: #f8f9fa;
  padding: 50px;
  border-radius: 12px;
  text-align: center;
}

.inquiry-section h3 {
  font-size: 1.8rem;
  color: #032a4d;
  margin-bottom: 30px;
}

.inquiry-form {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  gap: 20px;
}

.form-group input, .form-group select {
  flex: 1;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.inquiry-form textarea {
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
}

.submit-btn {
  background: #032a4d;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #021e3a;
}

/* 响应式调整：适配更多屏幕尺寸 */
@media (max-width: 1200px) {
  .product-list {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: 1fr;
  }

  .product-img {
    height: 220px;
  }

  .form-group {
    flex-direction: column;
    gap: 15px;
  }

  .inquiry-section {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .product-info {
    padding: 20px;
  }

  .product-tags {
    gap: 6px;
  }

  .product-desc {
    font-size: 0.9rem;
  }
}
</style>