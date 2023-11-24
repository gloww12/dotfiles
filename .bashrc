#
# ~/.bashrc
#
# If not running interactively, don't do anything
[[ $- != *i* ]] && return
alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '
export EDITOR=nvim;
alias yippee="yay"
alias :q="exit"
alias v="nvim"
eval "$(starship init bash)"
export PATH=/home/glow/.local/bin:$PATH
export PF_INFO="ascii title os kernel pkgs"
export PF_ASCII="Catppuccin"
export PF_COL1=4
export PF_COL3=5
if command -v tmux &> /dev/null && [ -n "$PS1" ] && [[ ! "$TERM" =~ screen ]] && [[ ! "$TERM" =~ tmux ]] && [ -z "$TMUX" ]; then
  exec tmux 
fi
pfetch
