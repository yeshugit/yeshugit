---
title: How to install and setup php mysql in termux?
featured_img: /img/post/default-featured.webp
featured: false
date: 2024-02-08 14:08:12
tags: [php, mysql, termux, android]
categories: [Web Development]
---
Hello in this post i will guide you to How To install and Setup PHP and MySQL in Termux.
<!--more-->
**Prerequisites:**

- **Termux app:** Download and install the Termux app from the Google Play Store or F-Droid if you haven't already.

**Installation:**

1. **Update package lists:** In the Termux app, type the following command and press Enter:

   ```bash
   pkg update
   ```

2. **Install PHP:** Choose your preferred version and install it using the corresponding command:

   - **Latest version:**

     ```bash
     pkg install php
     ```

   - **Specific version (e.g., 8.1):**

     ```bash
     pkg install php8.1
     ```

3. **Install MySQL (MariaDB):**

   ```bash
   pkg install mariadb
   ```

4. **Secure MySQL:**
   - Start the MySQL server:

     ```bash
     mysql_secure_installation
     ```

   - Follow the prompts to set a root password, remove anonymous users, disallow remote root access, and remove the test database.

**Configuration:**

1. **Start MySQL:**

   ```bash
   mysql_start
   ```

2. **(Optional) Install extensions:** If you need specific PHP extensions, use `pkg install` with the extension name, e.g., `pkg install php-curl`.

3. **Write and test a PHP script:** Create a `.php` file (e.g., `test.php`) in your desired directory and add some simple PHP code, such as:

   ```php
   <?php
   phpinfo();
   ?>
   ```

4. **Run the script:**
   - Find the path to PHP's CLI:

     ```bash
     which php
     ```

   - Run the script using the found path:

     ```bash
     /data/data/com.termux/files/usr/bin/php /path/to/test.php
     ```

   - Open the output URL (usually `http://127.0.0.1:80/test.php`) in your web browser to see the PHP info page.

**Additional considerations:**

- If you want a full web server setup, you can install an HTTP server like Apache2 (`pkg install apache2`) and configure it to serve your PHP files.
- Remember to secure your installation by setting strong passwords and considering appropriate access controls.
- For more advanced usage and troubleshooting, refer to the official documentation for PHP, MySQL, and the chosen HTTP server.

I hope this comprehensive guide helps you successfully install and set up PHP and MySQL on Termux!