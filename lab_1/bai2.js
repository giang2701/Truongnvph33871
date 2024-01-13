
        // Mảng để lưu trữ thông tin người dùng
        const users = [];

        // Hàm thêm người dùng vào mảng và hiển thị danh sách
        function addUser() {
            // Lấy giá trị từ form
            const userId = document.getElementById('userId').value;
            const userName = document.getElementById('userName').value;
            const userGender = document.getElementById('userGender').value;

            // Kiểm tra xem các trường có được điền đầy đủ hay không
            if (!userId || !userName || !userGender) {
                alert('Please fill in all fields');
                return;
            }

            // Tạo đối tượng người dùng
            const newUser = { id: userId, name: userName, gender: userGender };

            // Thêm người dùng vào mảng
            users.push(newUser);

            // Hiển thị danh sách người dùng
            displayUserList();

            // Reset form
            document.getElementById('userForm').reset();
        }

        // Hàm hiển thị danh sách người dùng
        function displayUserList() {
            const userList = document.getElementById('userList');

            // Xóa tất cả các phần tử trong danh sách
            userList.innerHTML = '';

            // Duyệt qua mảng người dùng và thêm vào danh sách
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `ID: ${user.id}, Name: ${user.name}, Gender: ${user.gender}`;
                userList.appendChild(listItem);
            });
        }