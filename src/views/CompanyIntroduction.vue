<template>
  <div class="company-intro-page">
    <!-- 页面标题区域 -->
    <div class="page-header">
      <div class="container">
        <h1>Company Introduction</h1>
        <p>About Ningjin Legu Grain Equipment Co., Ltd.</p>
      </div>
    </div>

    <!-- 公司简介内容 -->
    <section class="intro-content">
      <div class="container">
        <div class="intro-text">
          <h2>Our Company</h2>
          <p>
            Ningjin Legu Grain Equipment Co., Ltd. is a leading manufacturer and supplier of grain processing equipment. 
            With years of experience in the industry, we are committed to providing high-quality, efficient, and reliable 
            solutions for our customers worldwide. Our products are widely used in grain storage, transportation, cleaning, 
            and processing facilities.
          </p>
          <p>
            We pride ourselves on our innovative approach, strict quality control, and excellent after-sales service. 
            Our team of skilled engineers and technicians continuously works to develop new technologies and improve 
            existing products to meet the ever-changing needs of the grain industry.
          </p>
        </div>
        
        <div class="intro-image">
          <img src="../assets/sizu.jpg" alt="Company Facility" class="facility-image">
        </div>
      </div>
    </section>

    <!-- 公司理念 -->
    <section class="company-philosophy">
      <div class="container">
        <h2 class="section-title">Our Philosophy</h2>
        <div class="philosophy-cards">
          <div class="philosophy-card">
            <div class="card-icon">
              <i class="fa fa-cogs"></i>
            </div>
            <h3>Quality</h3>
            <p>We are dedicated to producing the highest quality equipment through rigorous testing and craftsmanship.</p>
          </div>
          <div class="philosophy-card">
            <div class="card-icon">
              <i class="fa fa-lightbulb-o"></i>
            </div>
            <h3>Innovation</h3>
            <p>We continuously invest in research and development to bring cutting-edge solutions to our customers.</p>
          </div>
          <div class="philosophy-card">
            <div class="card-icon">
              <i class="fa fa-handshake-o"></i>
            </div>
            <h3>Customer Service</h3>
            <p>We believe in building long-term relationships with our customers by providing exceptional support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们的号召性区域 -->
    <section class="contact-cta">
      <div class="container">
        <h2>Interested in Our Products?</h2>
        <p>Contact us today to learn more about how our grain equipment can benefit your business.</p>
        <router-link to="/lianxiwomen" class="btn-primary">Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CompanyIntroduction'
}
</script>

<style scoped>
/* 页面整体样式 */
.company-intro-page {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #333;
  background-color: #fff;
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 页面标题 */
.page-header {
  background-color: #032a4d;
  color: #fff;
  padding: 60px 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* 公司简介内容 */
.intro-content {
  padding: 80px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
}

.intro-text, .intro-image {
  flex: 1;
  min-width: 300px;
}

.intro-text h2 {
  font-size: 1.8rem;
  color: #032a4d;
  margin-bottom: 20px;
}

.intro-text p {
  margin-bottom: 15px;
  color: #666;
}

.facility-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 公司理念 */
.company-philosophy {
  padding: 80px 0;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 2rem;
  color: #032a4d;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #ee551f;
  margin: 15px auto;
}

.philosophy-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.philosophy-card {
  flex: 1;
  min-width: 250px;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.philosophy-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 2.5rem;
  color: #ee551f;
  margin-bottom: 20px;
}

.philosophy-card h3 {
  font-size: 1.3rem;
  color: #032a4d;
  margin-bottom: 15px;
}

.philosophy-card p {
  color: #666;
}

/* 联系我们的号召性区域 */
.contact-cta {
  padding: 80px 0;
  background-color: #032a4d;
  color: #fff;
  text-align: center;
}

.contact-cta h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.contact-cta p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* 按钮样式 */
.btn-primary {
  display: inline-block;
  padding: 12px 30px;
  background-color: #ee551f;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
}

.btn-primary:hover {
  background-color: #d44a17;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .intro-content {
    flex-direction: column;
  }
}
</style>