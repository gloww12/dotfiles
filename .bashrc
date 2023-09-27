#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '
eval "$(starship init bash)"
export PF_INFO="ascii title os kernel pkgs"
export PF_ASCII="Catppuccin"
export PF_COL1=4
export PF_COL3=5
export "MICRO_TRUECOLOR=1"
if command -v tmux &> /dev/null && [ -n "$PS1" ] && [[ ! "$TERM" =~ screen ]] && [[ ! "$TERM" =~ tmux ]] && [ -z "$TMUX" ]; then
  exec tmux new-session \; split-window -h 'ranger'
fi
pfetch
