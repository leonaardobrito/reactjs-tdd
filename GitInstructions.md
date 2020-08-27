# reactjs-tdd
**Criar README e preparar GIT:**

echo "# reactjs-tdd" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin git@github.com:leonaardobrito/reactjs-tdd.git
git push -u origin master

configurar alias no arquivo .gitconfig atravé do comando:
`git config --global --edit`
CASO queira editar VScode, execute:
`git config --global core.editor code`



[user]
	name = leonardo brito
	email = leonardonunesbrito@gmail.com
[core]
	editor = code --wait
[push]
	followTags = true
[alias]
	c = !git add --all && git commit -m
	s = !git status -s
	l = !git log --oneline --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
	amend = !git add --all %% git commit --amend --no-edit
	count = !git shortlog -s --grep


**Convenção em nomenclatura de gits**

"tipo" : "descrição"
fix:
feat: 
chore: adiciona biblioteca ou dependêcnia
style:
refactor:
perf:
test:

com essas palavras, pode-se gerar estatísticas com o comando:
`git count fix` ou qualquer outro tipo

 