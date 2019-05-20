var node_ssh = require("node-ssh");
var ssh = new node_ssh();

exports.handler = async event => {
  // TODO implement

  const newbornId = event.arguments.msg;
  const newbornPort = Math.floor(Math.random() * 9000) + 1000;
  ssh
    .connect({
      host: "ec2-3-82-155-140.compute-1.amazonaws.com",
      user: "ubuntu",
      // key: fs.readFileSync(path.join(__dirname, "ec2-test.pem"))
      privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEAm2kNrrTEflym+CLoX/SDI+cDSNwzlZAIU9CYHvd0PzkxBTcqNqiZm+Bw9Udu
wb32DPq+HV1SoEmp9NuBw3Eu1t75p2ECzouVQvTYHi7Kk6Hm1QaDDEdWz7BDvCWWFVbY+9VNylwh
nz9GHwvgQqfrZbqjSPT/Aevf6b/92GjLQt+6a8DrEz90ZO67iVqBY/9NDkPeuO4h8Q4Xh+pXM9Fy
V85SzRyBe633nVaU+TOXXhCeFYy6TMHWglxdEEoLU4uISyrTE6CahDSEk41W1fgcfowuDCFJ2B2W
QlwDSFs4eC2eUVd5vsnpx7EbfD3BRCJu158XlwMl0lUzaMVDS78UewIDAQABAoIBADOqrV3Twy+v
ZeNA17hu9dpNxw3GB3BFvj7/LlO9OOx7+wwc1u/tBYSJDYS+Bthqaw7Nnb7tc7bORq6c+3saedP9
tUosOl6okSr9c4w1Siviu3c+/vpqDTZnB13ZsRfPE7xFoeMQ1iy3QHy52gjPAreDYR20NcNRw9NW
fPIhhNHqQcDmOygeoj44ST1uLkrtVBPtpA5TrqgbG6QUxRctK5E6fiIUB2bSIz2dmiQr4bxYUMZA
sk3Xz/AY/39KHzcD+LhdFWapeY1DiAVECptnntMzLW8ffW3QLaJ4EbxeMRJEhwMKgUFpOUsWh+Zv
9gsxyQAEZWC1WvNpN3DFVwMFdGECgYEA4oILSr3srwi2JuLwl3FCc4HZJjfCqTsUF690iwZ67zgJ
rqT1mwqyQ0TM9+tgABRJuaArGJBz0SUI4qivVTkplO4xsUEAwblRxYMgDzZ6wP3XSoH2IohyVIwU
1l/Je3tAbCOOGqWniCy2GB4i4NYxYXiU5EabdWKlPmbns8pojr0CgYEAr6UvoiN76eo4ZiYFYzzn
0WcsisaK3dqRSkDiudkvMHkKcPgMF/25pcd9obumTySfxtHDSa2FvXVIxGx5IAYiybf83wqExfYE
ed+MQNCTp8uBIt3QlM1S2/n7jXwlG68sKKSssvG4dlP31EONc/eaDlZIILycMLuWc1DEOyOSH5cC
gYEAxtLuBIqYUsBr29CC7fxuHyQQr5pslc4VAgFyZIKosIlY/mMwcArAlYmz/b8vgoJMgNNWYPaT
ozdGCGeXmFBX7rHzDquHdYUtgRlrr87bi8KGE5Hms0NgUFSyCccE/g4fa4z+NOfKGh9dK+hwJzn9
GJkW4RYVacHQWOlNY6U9iGUCgYEAmIpI9/MBJoC3Ql86xpiaaw3DbTJIX6v2ChqXzPeFN/+mxb1m
I1/C3uqFfPRO1uTjrfN2OoJsZ8F31L6v4tPxWmZjQgEMli+2a3FtiMybr1nZaMJi5xf6IfjUMmfi
gkx7eUCqiy3KGVmLHdkc+93I+TKNqYCj1N7VJoi6IvIdcTkCgYEAs4Qyrm0cvF6X4j+a5IgVS3c6
OucIBME7nAocS4nvtr09WeCwgbuF/w3Fe791QNFO8haeUxsMjHX4GOFlB+ymcdeAPrUymE8CUIuC
gfhUARMq/aclKIQAeemnptLIQEgM9Ea+1Zg8NrLvKwkNrcvADvrQ/TQW3PiFCsas5ZOnB9w=
-----END RSA PRIVATE KEY-----`
    })
    .then(function() {
      ssh
        .execCommand(`source /home/ubuntu/anaconda3/bin/activate python3`, {
          cwd: "/home/ubuntu"
        })
        .then(function(result) {
          console.log("STDOUT: " + result.stdout);
          console.log("STDERR: " + result.stderr);
        });
      ssh
        .execCommand(`cd newborn-ml-scripts/`, {
          cwd: "/home/ubuntu"
        })
        .then(function(result) {
          console.log("STDOUT: " + result.stdout);
          console.log("STDERR: " + result.stderr);
        });
      ssh
        .execCommand(
          `anaconda3/envs/python3/bin/mlagents-learn unity-volume/config/trainer_config.yaml --env=./unity-volume/newborn --train --newborn-id=${newbornId} --no-graphics --api-connection --base-port=${newbornPort} &`,
          {
            cwd: "/home/ubuntu"
          }
        )
        .then(function(result) {
          console.log("STDOUT: " + result.stdout);
          console.log("STDERR: " + result.stderr);
          return result;
        });
    });
  return;
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!")
  };
  return response;
};
