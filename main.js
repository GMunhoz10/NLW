const LinksSocialMedia = {

  github = "GMunhoz10",
  facebook = "gabrielsds.munhoz",
  instagram = "gmunhozzz__"

}

function changeSocialMediaLinks(){
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }

}

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
}