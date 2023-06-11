# Ćwiczenia/Laboratorium

W czasie naszych zajęć będziemy korzystać z maszyna na systemie \*nix - [Ubuntu LTS](https://wiki.ubuntu.com/Releases) (rekomenduje - 2023-06: **20.04.6 LTS**), kilka możliwości: Virtualbox/VMware Workstaton Player, dual boot, lub Ubuntu na środowisku wirtualnym dostarczonym przez uczelnie.

Jeśli uruchamiasz Ubuntu na VirtualBoxie, nie zapomnij o zainstalowaniu *Guest additions* ([howto](https://askubuntu.com/questions/22743/how-do-i-install-guest-additions-in-a-virtualbox-vm)).

## Przygotowanie

0. Na każdych zajęciach będziemy umieszczać kod na repozytorium git (github lub, dla chętnych [gitlab](https://gitlab.com/)).

1. Upewnij się, że masz zainstalowane [nvm](https://github.com/nvm-sh/nvm) oraz [node w wersji LTS](https://github.com/nvm-sh/nvm#long-term-support):

   - linux - instalacja:

     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
     ```

     ```bash
     # przeladowanie konsoli
     bash
     ```

     ```bash
     # instalujemy lts
     nvm install --lts
     ```

2. Upewnij się, że masz zainstalowany twój ulubiony edytor, rekomendacje, jeden z nich:
  
   - [atom](https://snapcraft.io/install/atom/ubuntu) (projekt zakonczony ale z duzą ilością pluginów) lub [pulsar](https://github.com/pulsar-edit/pulsar) (projekt kontynuujący atoma),
   - [vscode](https://code.visualstudio.com/docs/setup/linux#_snap) czy [VSCodium](https://github.com/VSCodium/vscodium),
   - [JetBrains Fleet](https://www.jetbrains.com/fleet/download/#section=linux),
   - czy też [neovim](https://neovim.io/) :).

   Aby zainstalować vscode na Ubuntu:

   ```bash
   sudo snap install --classic code
   ```

4. Utwórz katalog `workspace` w folderze głównym użytkownika, którego będziesz używał w czasie ćwiczeń.

   ```bash
   #
   cd

   mkdir -p workspace

   cd workspace

   # upewnijmy się, że jesteśmy we właściwym
   # katalogu
   pwd

   # powinnaś / powinienes zobaczyc:
   #   /home/<your-username>/workspace
   ```

## Materiały dodatkowe

- TBA
