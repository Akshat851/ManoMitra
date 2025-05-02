if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh \"Your commit message\""
  exit 1
fi
git add .
git commit -m "$1"
git push
echo "Changes have been pushed to Git."
