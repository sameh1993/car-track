function renderSidebar() {
  const html = `
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="logo-icon">🚗</div>
      <h1>كار تراكر</h1>
      <p>نظام متابعة السيارات</p>
    </div>
    <nav class="nav-section" style="margin-top:8px">
      <div class="nav-label">القائمة</div>
      <a class="nav-item" href="index.html" data-page="index.html">
        <span class="nav-icon">📊</span> لوحة المتابعة
      </a>
      <a class="nav-item" href="cars.html" data-page="cars.html">
        <span class="nav-icon">🚙</span> السيارات
        <span class="nav-badge blue hidden" id="nb-cars"></span>
      </a>
      <a class="nav-item" href="odometer.html" data-page="odometer.html">
        <span class="nav-icon">🧭</span> قراءات العداد
      </a>
      <a class="nav-item" href="odometer-capture.html" data-page="odometer-capture.html">
        <span class="nav-icon">📸</span> تسجيل عداد بالكاميرا
      </a>
      <a class="nav-item" href="oil.html" data-page="oil.html">
        <span class="nav-icon">🛢️</span> تغيير الزيت
        <span class="nav-badge hidden" id="nb-oil"></span>
      </a>
      <a class="nav-item" href="filters.html" data-page="filters.html">
        <span class="nav-icon">🧰</span> الفلاتر
        <span class="nav-badge warn hidden" id="nb-filters"></span>
      </a>
      <a class="nav-item" href="licenses.html" data-page="licenses.html">
        <span class="nav-icon">📋</span> الرخص
        <span class="nav-badge hidden" id="nb-licenses"></span>
      </a>
      <a class="nav-item" href="reports.html" data-page="reports.html">
        <span class="nav-icon">📈</span> التقارير
      </a>
      <a class="nav-item" href="monthly-reports.html" data-page="monthly-reports.html">
        <span class="nav-icon">🗓</span> تقارير الشهر
      </a>
      <a class="nav-item" href="oil-status.html" data-page="oil-status.html">
        <span class="nav-icon">🛢️</span> حالة الزيت
      </a>
    </nav>
  </aside>`;
  document.getElementById('sidebar-mount').innerHTML = html;
}
