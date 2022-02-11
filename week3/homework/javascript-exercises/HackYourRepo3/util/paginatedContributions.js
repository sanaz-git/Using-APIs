// import {fetchContributions} from './fetchContributions.js';

// //pagination
// export function paginatedContributions(img2,contName,contNum){
//     const list_items = [
//         "img2","contName","contNum"
//       ];
      
//       const list_element = document.createElement('div');
//       list_element.classList.add('list');
//       document.body.appendChild(list_element);
      
//       const pagination_element = document.createElement('div');
//       pagination_element.classList.add('pageNumbers');
//       document.body.appendChild(pagination_element);
      
//       let current_page = 1;
//       let rows = 5;
      
//       function DisplayList(items, wrapper, rows_per_page, page) {
//         wrapper.innerHTML = "";
//         page--;
      
//         let start = rows_per_page * page;
//         let end = start + rows_per_page;
//         let paginatedItems = items.slice(start, end);
      
//         for (let i = 0; i < paginatedItems.length; i++) {
//           let item = paginatedItems[i];
      
//           let item_element = document.createElement('div');
//           item_element.classList.add('item');
//           item_element.innerText = item;
      
//           wrapper.appendChild(item_element);
//         }
//       }
      
//       function SetupPagination(items, wrapper, rows_per_page) {
//         wrapper.innerHTML = "";
      
//         let page_count = Math.ceil(items.length / rows_per_page);
//         for (let i = 1; i < page_count + 1; i++) {
//           let btn = PaginationButton(i, items);
//           wrapper.appendChild(btn);
//         }
//       }
      
//       function PaginationButton(page, items) {
//         let button = document.createElement('button');
//         button.innerText = page;
      
//         if (current_page == page) button.classList.add('active');
      
//         button.addEventListener('click', function () {
//           current_page = page;
//           DisplayList(items, list_element, rows, current_page);
      
//           let current_btn = document.querySelector('.pagenumbers button.active');
//           current_btn.classList.remove('active');
      
//           button.classList.add('active');
//         });
      
//         return button;
//       }
      
//       DisplayList(list_items, list_element, rows, current_page);
//       SetupPagination(list_items, pagination_element, rows);
      
// }
