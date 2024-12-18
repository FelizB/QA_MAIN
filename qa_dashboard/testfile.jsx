/*<html>
<head>
   <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
   <script src = "https://code.jquery.com/jquery-3.2.1.slim.min.js"> </script>
   <script src = "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"> </script>
</head>
<body>
   <h4> Adding the <i> data to the Bootstrap modal </i> using jQuery </h4>
   <!-- creating input to take data for Bootstrap modal -->
   <input type = "text" id = "product" placeholder = "product name" />
   <!-- number of quantities -->
   <input type = "number" id = "quantity" placeholder = "quantity" />
   <!-- price of the product -->
   <input type = "number" id = "price" placeholder = "price" />
   <!-- total price of the product -->
   <input type = "number" id = "total" placeholder = "total" />
   <!-- Button trigger modal -->
   <button type = "button" class = "btn btn-primary" id = "modalButton" data-toggle = "modal" data-target = "#exampleModal">
      Launch demo modal
   </button>
   <!-- Modal -->
   <div class = "modal fade" id = "exampleModal" tabindex = "-1" role = "dialog" aria-labelledby = "exampleModalLabel"
   aria-hidden="true">
   <div class = "modal-dialog" role = "document">
      <div class = "modal-content">
         <div class = "modal-header">
            <h5 class = "modal-title" id = "exampleModalLabel"> Payment modal </h5>
            <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close">
            <span aria-hidden = "true"> × </span>
            </button>
         </div>
         <div class = "modal-body">... </div>
            <div class = "modal-footer">
               <button type = "button" class = "btn btn-secondary" data-dismiss = "modal"> Cancel payment </button>
               <button type = "button" class = "btn btn-primary"> Make Payment </button>
            </div>
         </div>
      </div>
   </div>
   <script>
      $('#modalButton').click(function () {
      
         // getting the value of the input fields
         var product = $('#product').val();
         var quantity = $('#quantity').val();
         var price = $('#price').val();
         var total = $('#total').val();
         var htmlStr = '<p> Product: ' + product + '</p>' +
         '<p> Quantity: ' + quantity + '</p>' +
         '<p> Price: ' + price + '</p>' +
         '<p> Total: ' + total + '</p>';
         
         // adding the data to the modal
         $('.modal-body').html(htmlStr);
      });
   </script>
</body>
</html>


*/
