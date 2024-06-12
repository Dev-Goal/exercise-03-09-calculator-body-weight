var btnBody = document.getElementById("btn");
btnBody.addEventListener("click", getBody);
function getBody() {
  let weight = parseFloat(document.getElementById("numberweight").value);
  let height = parseFloat(document.getElementById("numberheight").value);
  let bmi = weight / (height ^ 2);
  if (bmi < 18.5) {
    document.getElementById("result").innerHTML =
      "BMI của bạn là " + bmi + " . Phân loại: Underweight";
  } else if (18.5 <= bmi < 25.0) {
    document.getElementById("result").innerHTML =
      "BMI của bạn là " + bmi + " . Phân loại: Normal";
  } else if (25.0 <= bmi < 30.0) {
    document.getElementById("result").innerHTML =
      "BMI của bạn là " + bmi + " . Phân loại: Overweight";
  } else if (30.0 <= bmi) {
    document.getElementById("result").innerHTML =
      "BMI của bạn là " + bmi + " . Phân loại: Obese";
  }
}
