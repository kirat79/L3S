# Docker Build Komutu
Docker image'inizi ARM64 mimarisi için oluşturmak için Docker buildx kullanarak bir platform belirtmeniz gerekebilir:

```bash docker buildx build --platform linux/arm64 -t optimism-node . ``` 

Docker Run Komutu
Image'inizi oluşturduktan sonra aşağıdaki komutu kullanarak container'ınızı çalıştırabilirsiniz:

```bash docker run --rm -it -p 8545:8545 -p 8551:8551 optimism-node ```

Bu adımlarla, Docker container'ınızı ARM64 mimarisi için oluşturabilir ve çalıştırabilirsiniz.
