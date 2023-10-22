<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : products.xsl
    Created on : 2 November 2022, 4:20 pm
    Author     : youssif
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="/">
        <html>
            <head>
                <title>Products Page</title>
                <!-- Link for CSS file -->
                <link rel="stylesheet" href="stylesheet.css"/>
                <script src = "ProductsSearchBar.js"></script> 
            </head>
            <body>
                
                <div class = "navbar" id="nav-list">
                    <a href="HomePage.html">Home</a>
                    <a href="Products.html">Products</a>
                    <a href="Search.html">Search</a> 
                    <!--<div class="search-box">
                        <input type="text" placeholder="Search e.g 002-43" name="search"/>
                        <button type="submit">Submit</button>
                    </div> -->
                    <div class="menu" id="togle-button">
                        <div class="menu-line"></div>
                        <div class="menu-line"></div>
                        <div class="menu-line"></div>
                    </div>
                </div>
                
                <script type="text/javascript"> 
                    const toggleButton = document.getElementById('togle-button');
                    const navlist = document.getElementById('nav-list');

                    toggleButton.addEventListener('click', () =>{
                        navlist.classList.toggle('active');
                    });
                </script>
                
                <!-- new table here -->
                
                
                <h1 class = "Section-title">FOOTWEAR</h1>    
                <div class = "grid">
                    
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='002-01']/category"/></h5>
                        <img src="../images/f1.jpg" alt="Shoes" width="220px" height ="210px"/>
                        <h5>Code: <xsl:value-of select = "products/product[@code='002-01']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='002-01']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='002-01']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='002-01']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='002-01']/unitPrice"/></h5>
                    </div>

                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='002-02']/category"/></h5>
                        <img src="../images/f4.jpg" alt="Shoes" width="220px" height ="210px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='002-02']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='002-02']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='002-02']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='002-02']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='002-02']/unitPrice"/></h5>
                    </div>
                    
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='002-03']/category"/></h5>
                        <img src="../images/f5.jpg" alt="Shoes" width="220px" height ="210px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='002-03']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='002-03']/brandName"/></h5>
                        <h5>Description : <xsl:value-of select = "products/product[@code='002-03']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='002-03']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='002-03']/unitPrice"/></h5>
                    </div>
                    
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='002-04']/category"/></h5>
                        <img src="../images/f2.jpg" alt="Shoes" width="220px" height ="210px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='002-04']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='002-04']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='002-04']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='002-04']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='002-04']/unitPrice"/></h5>
                    </div>
                    
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='002-05']/category"/></h5>
                        <img src="../images/f3.jpg" alt="Shoes" width="220px" height ="210px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='002-05']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='002-05']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='002-05']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='002-05']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='002-05']/unitPrice"/></h5>
                    </div>
                    
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='002-06']/category"/></h5>
                        <img src="../images/f6.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='002-06']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='002-06']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='002-06']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='002-06']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='002-06']/unitPrice"/></h5>
                    </div>

                </div>
                
                <h1 class = "Section-title">WATCHES</h1>
                <div class = "grid">
     
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='004-01']/category"/></h5>
                        <img src="../images/w1.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='004-01']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='004-01']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='004-01']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='004-01']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='004-01']/unitPrice"/></h5>
                    </div>
                    
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='004-02']/category"/></h5>
                        <img src="../images/w2.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='004-02']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='004-02']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='004-02']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='004-02']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='004-02']/unitPrice"/></h5>
                    </div>
                    
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='004-03']/category"/></h5>
                        <img src="../images/w3.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='004-03']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='004-03']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='004-03']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='004-03']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='004-03']/unitPrice"/></h5>
                    </div>
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='004-04']/category"/></h5>
                        <img src="../images/w4.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='004-04']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='004-04']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='004-04']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='004-04']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='004-04']/unitPrice"/></h5>
                    </div>
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='004-05']/category"/></h5>
                        <img src="../images/w5.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='004-05']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='004-05']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='004-05']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='004-05']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='004-05']/unitPrice"/></h5>
                    </div>
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='004-06']/category"/></h5>
                        <img src="../images/w6.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='004-06']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='004-06']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='004-06']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='004-06']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='004-06']/unitPrice"/></h5>
                    </div>
                    
                </div>
                
                <h1 class = "Section-title">WALLETS</h1>
                <div class = "grid">
     
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='007-01']/category"/></h5>
                        <img src="../images/wa1.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='007-01']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='007-01']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='007-01']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='007-01']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='007-01']/unitPrice"/></h5>
                    </div>
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='007-02']/category"/></h5>
                        <img src="../images/wa4.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='007-02']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='007-02']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='007-02']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='007-02']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='007-02']/unitPrice"/></h5>
                    </div>
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='007-03']/category"/></h5>
                        <img src="../images/wa6.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='007-03']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='007-03']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='007-03']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='007-03']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='007-03']/unitPrice"/></h5>
                    </div>
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='007-04']/category"/></h5>
                        <img src="../images/wa5.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='007-04']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='007-04']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='007-04']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='007-04']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='007-04']/unitPrice"/></h5>
                    </div>
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='007-05']/category"/></h5>
                        <img src="../images/wa3.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='007-05']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='007-05']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='007-05']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='007-05']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='007-05']/unitPrice"/></h5>
                    </div>
                    <div class="items">
                        <h5>Category : <xsl:value-of select = "products/product[@code='007-06']/category"/></h5>
                        <img src="../images/wa2.jpg" alt="Shoes" width="200px" height ="225px"/>
                        <h5>Code : <xsl:value-of select = "products/product[@code='007-06']/@code"/></h5>
                        <h5>Brand Name : <xsl:value-of select = "products/product[@code='007-06']/brandName"/></h5>
                        <h5> Description : <xsl:value-of select = "products/product[@code='007-06']/description"/></h5>
                        <h5>Quantity : <xsl:value-of select = "products/product[@code='007-06']/quantity"/></h5>
                        <h5>Price : $<xsl:value-of select = "products/product[@code='007-06']/unitPrice"/></h5>
                    </div>
                </div>
                
                
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
