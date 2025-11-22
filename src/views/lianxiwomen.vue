<template>
  <div class="contact-page-static">
    <!-- 页面标题区域 -->
    <div class="page-header">
      <div class="container">
        <h1>Contact Information</h1>
        <p>Get in touch with us</p>
      </div>
    </div>

    <!-- 联系信息和表单 -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- 左侧：联系信息 -->
          <div class="contact-info">
            <h2>Contact Details</h2>
            <ul>
              <li class="info-item">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <div class="info-text">
                  <h3>Location</h3>
                  <p>Ningjin Legu Equipment Co., Ltd.</p>
                  <p>Xiangjiang Street, Ningjin County</p>
                  <p>Dezhou City, Shandong Province, China</p>
                </div>
              </li>
              <li class="info-item">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <div class="info-text">
                  <h3>Phone</h3>
                  <p>+86 15605448657</p>
                  <p>+86 13723925197</p>
                </div>
              </li>
              <li class="info-item">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <div class="info-text">
                  <h3>Email</h3>
                  <p>info@example.com</p>
                  <p>sales@example.com</p>
                </div>
              </li>
              <li class="info-item">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <div class="info-text">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- 右侧：静态表单 -->
          <div class="contact-form-static">
            <h2>Send Us a Message</h2>
            <form class="static-form">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" disabled>
              </div>
              <div class="form-group">
                <label for="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" disabled>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Message subject" disabled>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Enter your message here..." disabled></textarea>
              </div>
              <div class="form-group">
                <button type="button" class="btn-disabled" disabled>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 静态地图 -->
    <section class="map-section">
      <div class="container">
        <h2>Our Location</h2>
        <div class="static-map">
          <img src="https://placehold.co/1200x400?text=Company+Map+Location" alt="Company Map" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ContactInformationStatic',
}
</script>

<style scoped>
/* 页面整体样式 */
.contact-page-static {
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

/* 联系内容区 */
.contact-content {
  padding: 80px 0;
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.contact-info, .contact-form-static {
  flex: 1;
  min-width: 300px;
}

.contact-info h2, .contact-form-static h2 {
  font-size: 1.8rem;
  color: #032a4d;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
}

.contact-info h2::after, .contact-form-static h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #ee551f;
}

/* 联系信息列表 */
.info-item {
  display: flex;
  margin-bottom: 30px;
  align-items: flex-start;
}

.info-item i {
  font-size: 1.8rem;
  color: #ee551f;
  margin-right: 20px;
  margin-top: 5px;
  width: 30px;
  text-align: center;
}

.info-text h3 {
  font-size: 1.1rem;
  color: #032a4d;
  margin-bottom: 5px;
}

.info-text p {
  color: #666;
  margin: 0;
}

/* 静态表单样式 */
.static-form {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  background-color: #e9ecef; /* 灰色背景表示不可用 */
  color: #6c757d;
}

/* 禁用按钮样式 */
.btn-disabled {
  display: inline-block;
  padding: 12px 30px;
  background-color: #adb5bd; /* 灰色按钮 */
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-family: inherit;
  font-size: 1rem;
  cursor: not-allowed; /* 禁止光标 */
  opacity: 0.7;
}

/* 地图区域 */
.map-section {
  padding: 80px 0;
  background-color: #f4f4f4;
}

.map-section h2 {
  font-size: 1.8rem;
  color: #032a4d;
  margin-bottom: 30px;
  text-align: center;
}

.static-map {
  width: 100%;
  height: 400px;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .page-header {
    padding: 40px 0;
  }
  .page-header h1 {
    font-size: 2rem;
  }
  .contact-content {
    padding: 60px 0;
  }
  .contact-grid {
    flex-direction: column;
    gap: 30px;
  }
  .static-form {
    padding: 30px 20px;
  }
  .map-section {
    padding: 60px 0;
  }
}
</style>