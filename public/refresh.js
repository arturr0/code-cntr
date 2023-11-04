document.addEventListener('DOMContentLoaded', function() {
  const servicesDropdown = document.getElementById('servicesDropdown');
  const dropdownContent = servicesDropdown.querySelector('.dropdown-content');
  
  servicesDropdown.addEventListener('mouseover', function() {
      dropdownContent.style.display = 'block';
  });

  servicesDropdown.addEventListener('mouseleave', function() {
      dropdownContent.style.display = 'none';
  });

  dropdownContent.addEventListener('click', function(event) {
      event.stopPropagation();
  });

  document.addEventListener('click', function() {
      dropdownContent.style.display = 'none';
  });
});
