function setup(): void {
  setupCssVariables();
}

function setupCssVariables() {
  // @ts-ignore
  const colors = window.settings.colors();
  const body = document.querySelector('body')!;
  body.style.setProperty('--bg-color-layer1', colors.backgroundColors.layer1);
  body.style.setProperty('--bg-color-layer2', colors.backgroundColors.layer2);
  body.style.setProperty('--bg-color-layer3', colors.backgroundColors.layer3);
  body.style.setProperty('--bg-color-layer4', colors.backgroundColors.layer4);
  body.style.setProperty('--foreground-color', colors.foregroundColor);
  for(let i = 0; i < colors.accents.length; i++) {
    body.style.setProperty(`--accent-color-${i+1}`, colors.accents[i]);
  }
}

export default setup;