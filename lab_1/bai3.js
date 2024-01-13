function convertToCamelCase() {
    // Lấy giá trị từ textarea
    const inputString = document.getElementById('inputString').value;

    // Chuyển đổi thành camelCase và loại bỏ khoảng trắng và ký tự đặc biệt
    const camelCaseString = inputString.replace(/[^\w\s]/g, '')
                                        .split(/\s+/)
                                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                        .join('');

    // Hiển thị kết quả
    document.getElementById('outputString').textContent = camelCaseString;
}
