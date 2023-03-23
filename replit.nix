{ pkgs }: {
	deps = [
		pkgs.less
  pkgs.gitFull
  pkgs.vim
  pkgs.gh
  pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}