!function(){const t=document.querySelectorAll(".comment-button");t.forEach(e=>{const c=e.classList[2];e.addEventListener("click",()=>{t.forEach(t=>t.classList.toggle("active",t===e)),document.querySelectorAll(".comment-position").forEach(t=>t.classList.toggle("active",t.classList.contains(c))),CONFIG.comments.storage&&localStorage.setItem("comments_active",c)})});let e=CONFIG.comments["activeClass"];if(CONFIG.comments.storage&&(e=localStorage.getItem("comments_active")||e),e){const c=document.querySelector(`.comment-button.${e}`);c&&c.click()}}();