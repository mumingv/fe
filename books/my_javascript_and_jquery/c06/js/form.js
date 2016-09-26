// 表单事件

var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

// 下拉列表中选择元素时，进行提示
function packageHint() {
    // 无参数函数可以使用this，表示触发调用此函数的元素对象
    var pack = this.options[this.selectedIndex].value;
    if (pack === 'monthly') {
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
    } else {
        elPackageHint.innerHTML = 'Wise choice!';
    }
}

// 提交表单时检查复选框是否勾选
function checkTerms(event) {
    if (!elTerms.checked) {
        elTermsHint.innerHTML = 'You must agree to the terms.';
        // 阻止事件的默认行为(点击表单提交按钮，默认会跳转到action指定的页面)
        event.preventDefault();
    }
}

// 下拉列表中选择某一项时触发
elSelectPackage.addEventListener('change', packageHint, false);
// 表单元素，点击'提交'按钮时触发
elForm = addEventListener('submit', checkTerms, false);
