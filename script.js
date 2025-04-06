// Handle Internship Submission
const form = document.getElementById("internship-form");

form?.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const country = document.getElementById("country").value;
  const link = document.getElementById("link").value;
  const jobDescription = document.getElementById("jobDescription").value;

  alert(
    `✅ Internship Submitted!\n\n📌 Title: ${title}\n🌍 Country: ${country}\n🔗 Link: ${link}\n📝 Description: ${jobDescription}`
  );

  // Optional: clear fields after submission
  form.reset();
});
