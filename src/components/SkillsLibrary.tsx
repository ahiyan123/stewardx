import { useState } from 'react';
import { Book, X, ExternalLink } from 'lucide-react';
import { survivalGuides } from '../data/survivalGuides';
import { theme } from '../theme';
import { SurvivalGuide, AffiliateProduct } from '../types';
import CarbonAds from './CarbonAds';

interface SkillsLibraryProps {
  alertActive: boolean;
}

export default function SkillsLibrary({ alertActive }: SkillsLibraryProps) {
  const [selectedGuide, setSelectedGuide] = useState<SurvivalGuide | null>(null);

  return (
    <div
      style={{
        backgroundColor: theme.colors.gray,
        border: `2px solid ${theme.colors.gold}`,
        padding: '1rem',
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Book size={20} color={theme.colors.gold} />
        <span style={{ color: theme.colors.gold, fontSize: '0.875rem', fontWeight: 'bold' }}>
          BANQUET OF SKILLS
        </span>
      </div>

      {!selectedGuide ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
          {survivalGuides.map((guide) => (
            <button
              key={guide.id}
              onClick={() => setSelectedGuide(guide)}
              style={{
                backgroundColor: theme.colors.background,
                border: `1px solid ${theme.colors.gold}`,
                padding: '1rem',
                color: theme.colors.white,
                fontFamily: theme.typography.fontFamily,
                fontSize: '0.75rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.colors.lightGold;
                e.currentTarget.style.backgroundColor = theme.colors.gray;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.colors.gold;
                e.currentTarget.style.backgroundColor = theme.colors.background;
              }}
            >
              <div style={{ color: theme.colors.gold, fontWeight: 'bold', marginBottom: '0.5rem' }}>
                [{guide.category}]
              </div>
              <div>{guide.title}</div>
            </button>
          ))}
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: theme.colors.gold, fontSize: '0.625rem', marginBottom: '0.25rem' }}>
                [{selectedGuide.category}]
              </div>
              <div style={{ color: theme.colors.white, fontSize: '1rem', fontWeight: 'bold' }}>
                {selectedGuide.title}
              </div>
            </div>
            <button
              onClick={() => setSelectedGuide(null)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: theme.colors.gold,
                cursor: 'pointer',
                padding: '0.25rem',
              }}
            >
              <X size={24} />
            </button>
          </div>

          <div
            style={{
              backgroundColor: theme.colors.background,
              padding: '1rem',
              marginBottom: '1rem',
              maxHeight: '400px',
              overflowY: 'auto',
              border: `1px solid ${theme.colors.lightGray}`,
            }}
          >
            <pre
              style={{
                color: theme.colors.white,
                fontSize: '0.75rem',
                lineHeight: '1.6',
                fontFamily: theme.typography.fontFamily,
                whiteSpace: 'pre-wrap',
                margin: 0,
              }}
            >
              {selectedGuide.content}
            </pre>
          </div>

          <div
            style={{
              borderTop: `2px solid ${theme.colors.crimson}`,
              paddingTop: '1rem',
            }}
          >
            <div
              style={{
                color: theme.colors.crimson,
                fontSize: '0.875rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                letterSpacing: '0.1em',
              }}
            >
              REQUIRED TOOLS
            </div>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {selectedGuide.requiredTools.map((product: AffiliateProduct) => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    backgroundColor: theme.colors.background,
                    padding: '0.75rem',
                    border: `1px solid ${theme.colors.lightGray}`,
                  }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      border: `1px solid ${theme.colors.gold}`,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ color: theme.colors.white, fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      {product.name}
                    </div>
                    <div style={{ color: theme.colors.lightGray, fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                      {product.description}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: theme.colors.gold, fontSize: '0.875rem', fontWeight: 'bold' }}>
                        {product.price}
                      </span>
                      <a
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: theme.colors.gold,
                          color: theme.colors.background,
                          padding: '0.5rem 1rem',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          fontFamily: theme.typography.fontFamily,
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        EQUIP HEARTH
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <div style={{ color: theme.colors.lightGray, fontSize: '0.625rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              SOVEREIGN AD PLACEMENT
            </div>
            <CarbonAds alertActive={alertActive} />
          </div>
        </div>
      )}
    </div>
  );
}
