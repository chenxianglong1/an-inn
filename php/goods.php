<?php
    header('Access-Control-Allow-Origin:*');
    include 'connect.php';
    $sql = "select * from goods";
    $result=$conn->query($sql);
     $row=$result->fetch_all(MYSQLI_ASSOC);
     $result->free();
    // 关闭连接
    $conn->close();
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>