<template>
  <div class="recruitment-page">
    <!-- 页面标题区域 -->
    <div class="page-header">
      <div class="container">
        <h1>Careers</h1>
        <p>Join Us, Grow Together</p>
      </div>
    </div>

    <!-- 招聘理念 -->
    <section class="recruitment-philosophy">
      <div class="container">
        <div class="philosophy-content">
          <h2>Our Recruitment Philosophy</h2>
          <p>
            Ningjin Legu Grain Equipment Co., Ltd. has always adhered to the "people-oriented" talent strategy. We believe that talent is the core driving force for enterprise development.
            We are committed to providing every employee with broad development space, a good working environment, and competitive salary and benefits,
            allowing employees to grow and create brilliance together with the enterprise.
          </p>
        </div>
      </div>
    </section>

    <!-- 职位列表 -->
    <section class="job-listings">
      <div class="container">
        <h2 class="section-title">Latest Positions</h2>
        
        <!-- 暂无职位状态 -->
        <div class="no-jobs" v-if="jobs.length === 0">
          <div class="no-jobs-icon">
            <i class="fa fa-inbox"></i>
          </div>
          <h3>No Current Openings</h3>
          <p>We currently do not have any positions available. However, we welcome you to send your resume to our recruitment email. We will add you to our talent pool
            and contact you when a suitable position becomes available.</p>
          <a href="#contact" class="btn-primary">Contact Us</a>
        </div>
        
        <!-- 职位列表 -->
        <div class="jobs-grid" v-else>
          <div class="job-card" v-for="job in jobs" :key="job.id">
            <div class="job-card-header">
              <h3>{{ job.title }}</h3>
              <span class="job-type">{{ job.type }}</span>
            </div>
            <div class="job-card-body">
              <div class="job-info">
                <span class="job-location"><i class="fa fa-map-marker"></i> {{ job.location }}</span>
                <span class="job-department"><i class="fa fa-sitemap"></i> {{ job.department }}</span>
                <span class="job-salary"><i class="fa fa-money"></i> {{ job.salary }}</span>
              </div>
              <p class="job-description">{{ job.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 招聘流程 -->
    <section class="recruitment-process">
      <div class="container">
        <h2 class="section-title">Recruitment Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Submit Application</h3>
              <p>Submit your resume and cover letter through online application or email.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Resume Screening</h3>
              <p>Our recruitment team will carefully review your application.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Interview Stage</h3>
              <p>After passing the screening, we will invite you for an interview (which may include a phone interview and an on-site interview).</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Offer Notification</h3>
              <p>After a successful interview, we will send you a formal offer letter.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>Onboarding & Training</h3>
              <p>Join our team and start your career journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 (简化版) -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Recruitment Contact Information</h3>
            <ul>
              <li>
                <i class="fa fa-envelope"></i>
                <span>Recruitment Email: hr@example.com</span>
              </li>
              <li>
                <i class="fa fa-phone"></i>
                <span>Contact Phone: +86 15605448657</span>
              </li>
              <li>
                <i class="fa fa-map-marker"></i>
                <span>Company Address: Ningjin Legu Equipment Co., Ltd., Xiangjiang Street, Ningjin County, Dezhou City, Shandong Province</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TalentRecruitment',
  data() {
    return {
      // Job data, currently empty, can be added as needed
      jobs: []
    };
  }
};
</script>

<style scoped>
/* 页面整体样式 */
.recruitment-page {
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

/* 招聘理念 */
.recruitment-philosophy {
  padding: 80px 0;
  background-color: #f9f9f9;
}

.philosophy-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.philosophy-content h2 {
  font-size: 2rem;
  color: #032a4d;
  margin-bottom: 20px;
}

/* 职位列表 */
.job-listings {
  padding: 80px 0;
}

.section-title {
  font-size: 2rem;
  color: #032a4d;
  text-align: center;
  margin-bottom: 40px;
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

/* 暂无职位 */
.no-jobs {
  text-align: center;
  padding: 60px 0;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.no-jobs-icon {
  font-size: 60px;
  color: #ccc;
  margin-bottom: 20px;
}

.no-jobs h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.no-jobs p {
  color: #666;
  max-width: 600px;
  margin: 0 auto 30px;
}

/* 职位卡片 */
.jobs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.job-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.job-card-header {
  padding: 20px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-card-header h3 {
  font-size: 1.2rem;
  color: #032a4d;
  margin: 0;
}

.job-type {
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #ee551f;
  color: #fff;
}

.job-card-body {
  padding: 20px;
}

.job-info {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: #666;
}

.job-location, .job-department, .job-salary {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.job-location i, .job-department i, .job-salary i {
  margin-right: 5px;
}

.job-description {
  color: #666;
  margin-bottom: 10px;
}

/* 招聘流程 */
.recruitment-process {
  padding: 80px 0;
  background-color: #f9f9f9;
}

.process-steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 50px;
  left: 50px;
  right: 50px;
  height: 2px;
  background-color: #ddd;
  z-index: 1;
}

.process-step {
  flex: 1;
  min-width: 200px;
  text-align: center;
  position: relative;
  z-index: 2;
  margin-bottom: 30px;
}

.step-number {
  width: 50px;
  height: 50px;
  background-color: #032a4d;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 auto 20px;
}

.step-content h3 {
  font-size: 1.1rem;
  color: #032a4d;
  margin-bottom: 10px;
}

.step-content p {
  color: #666;
  font-size: 0.9rem;
}

/* 联系我们 */
.contact-section {
  padding: 80px 0;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.contact-info {
  flex: 1;
  min-width: 300px;
  text-align: center;
}

.contact-info h3 {
  font-size: 1.5rem;
  color: #032a4d;
  margin-bottom: 20px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
  display: inline-block;
  text-align: left;
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}

.contact-info li i {
  font-size: 1.2rem;
  color: #ee551f;
  margin-right: 15px;
  margin-top: 3px;
}

/* 按钮样式 */
.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 10px 20px;
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

.btn-secondary {
  background-color: #032a4d;
}

.btn-secondary:hover {
  background-color: #021f3b;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .process-steps {
    flex-direction: column;
  }
  
  .process-steps::before {
    display: none;
  }
  
  .process-step {
    margin-bottom: 40px;
  }
}
</style>