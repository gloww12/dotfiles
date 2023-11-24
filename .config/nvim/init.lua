require('options')
require('plugins')
require('cat')
require('file')
require('lsp')
vim.opt.showmode = false

require('lualine').setup({
  options = {
    icons_enabled = true,
    component_separators = '|',
    section_separators = '',
    disabled_filetypes = {
      statusline = {'NvimTree'}
    }
  },
})
require('nvim-treesitter.configs').setup({
  highlight = {
    enable = true,
  },
  ensure_installed = {
    'javascript',
    'css',
    'json',
    'lua',
    'python',
    'java',
    'ruby',
    'html'
  },
})
require("nvim-tree").setup()
vim.keymap.set('n', '<C-f>', ':NvimTreeToggle<CR>')
